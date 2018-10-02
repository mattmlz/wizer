// Requires
var gulp                = require( 'gulp' ),
    gulp_plumber        = require( 'gulp-plumber' ),
    browserify          = require( 'browserify' ),
    gulp_notify         = require( 'gulp-notify' ),
    gulp_sass           = require( 'gulp-sass' ),
    gulp_autoprefixer   = require( 'gulp-autoprefixer' ),
    uglifyify           = require( 'uglifyify' ),
    glsl                = require('glslify'),
    source              = require('vinyl-source-stream'),
    gulp_data           = require('gulp-data'),
    gulp_rename         = require( 'gulp-rename' ),
    browserSync         = require('browser-sync').create();


/************
* FUNCTIONS *
************/
function requireUncached( $module ) {
    delete require.cache[require.resolve( $module )];
    return require( $module );
}

/**********
* OPTIONS *
**********/
var options               = {};
options.paths             = {};
options.paths.build       = '../web/';
options.paths.homepage    = '../html/';
options.paths.css         = '../src/css/';
options.paths.sass        = '../src/sass/';
options.paths.fonts       = '../src/fonts/';
options.paths.images      = '../src/img/';
options.paths.medias      = '../src/medias/';
options.paths.js          = '../src/js/';
options.sass              = {};
options.sass.output_style = 'compressed'; // nested | expanded | compact | compressed

/*****
* JS *
*****/
gulp.task( 'js', () =>
{
    // Browserify
    browserify( `${options.paths.js}script.js`, {
        paths      : [ './node_modules', options.paths.js ],
        debug      : false,
        extensions : ['.js', '.json'],
        transform  : ['glslify']
    } )

    .transform(
        {
            global : true
        },
        'uglifyify'
    )
    .bundle()

    // Error (plumber not working)
    .on( 'error', gulp_notify.onError( '<%= error.message %>' ) )

    // Send to build
    .pipe( source( 'script.js') )
    .pipe( gulp.dest(
        `${options.paths.build}src/js/`
    ) )

    // Notify
    .pipe( gulp_notify( 'js' ) );
} );

/*******
* HTML *
*******/
gulp.task( 'html', () =>
{
    return gulp.src( `${options.paths.homepage}*.html` )

        // Plumber
        .pipe( gulp_plumber( {
            errorHandler : gulp_notify.onError('<%= error.message %>')
        } ) )

        // Send to build
        .pipe( gulp.dest(
            options.paths.build
        ) )

        // Notify
        .pipe( gulp_notify( 'html' ) );
} );

/******
* CSS *
******/
gulp.task( 'css', () =>
{
    return gulp.src( `${options.paths.sass}main.scss` )

    // Plumber
    .pipe( gulp_plumber( {
        errorHandler : gulp_notify.onError('<%= error.message %>')
    } ) )

    // SASS
    .pipe( gulp_sass( {
        outputStyle : options.sass.output_style
    } ) )

    // Auto prefixer
    .pipe( gulp_autoprefixer( {
        browsers : 'last 50 versions'
    } ) )

    // Rename
    .pipe( gulp_rename( 'style.css' ) )

    // Send to build
    .pipe( gulp.dest(
        `${options.paths.build}src/css/`
    ) )

    // Notify
    .pipe( gulp_notify( 'css' ) );
} );

/*************
* COPY FILES *
*************/
gulp.task( 'copy', () =>
{
return gulp.src(
        [
            `${options.paths.fonts}**/**`,
            `${options.paths.images}**/**`,
            `${options.paths.medias}**/**`,
            `${options.paths.css}**/**`,
        ],
        {
            base : './',
            buffer : false
        }
    )

    // Send to build
    .pipe( gulp.dest(
        options.paths.build + 'src/'
    ) )

    // Notify
    .pipe( gulp_notify( {
        message : 'copy',
        onLast  : true
    } ) );
} );

/**********
* DEFAULT *
**********/
gulp.task( 'default', [ 'js', 'html', 'css', 'copy' ] );

/********
* START *
********/
gulp.task( 'start', [ 'default', 'watch' ] );

/**************
* BrowserSync *
**************/
gulp.task('browser-sync', () => {
    browserSync.init({
        proxy : 'http://wizer.my/',
        port : 3000,
        browser: "google chrome",
        open: true,
        reloadOnRestart : true,
        online : true
    });

});

/********
* WATCH *
********/
gulp.task( 'watch', ['browser-sync'], () =>
{
    // JS
    gulp.watch( options.paths.js + '**/*.js', [ 'js' ] ).on('change', browserSync.reload);

    // TEMPLATE
    gulp.watch( options.paths.homepage + '**/*.html', [ 'html' ] ).on('change', browserSync.reload);

    // SASS
    gulp.watch( options.paths.sass + '**/*.scss', [ 'css' ] ).on('change', browserSync.reload);

    // COPY
    gulp.watch(
        [
            `${options.paths.fonts}**`,
            `${options.paths.images}**`,
            `${options.paths.medias}**`,
        ],
        [ 'copy' ]
    );
} );