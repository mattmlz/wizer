/***********************
* ANIMATION OF SCREENS *
***********************/

(function () {

    function toArray(arrayLike) {
        return Array.prototype.slice.call( arrayLike );
    }

    function qs(selector) {
        var $screens = document.querySelector('.screens');
        return $screens.querySelector( selector );
    }

    /* Main */

    // var screens;

    function start() {
        var screenTimeline = new TimelineLite();
        var width = window.innerWidth;

/*        // Screen 1
        screenTimeline.to( qs('.screen-01'), 0, {opacity: 1} );
        screenTimeline.from( qs('.screen-01'), 1, {opacity: 0, y: '25%'});
        screenTimeline.to( qs('.screen-01'), 0.5, {opacity: 0, delay: 2.5});

        //Screen 2
        screenTimeline.to( qs('.screen-02'), 1, {opacity: 1});
        screenTimeline.from( qs('.screen-02 .tap-marker'), 0.35, {opacity: 0, delay: 0.5});
        screenTimeline.to( qs('.screen-02 .tap-marker'), 0.25, {scale: 0.7, delay: 0.5});
        screenTimeline.to( qs('.screen-02 .tap-marker'), 0.35, {opacity: 0, scale: 1}, '+=0.5');
        screenTimeline.to( qs('.screen-02'), 0.5, {opacity: 0, delay: 1.5});

        //Screen 3
        screenTimeline.to( qs('.screen-03'), 0, {opacity: 1});

        //first click
        screenTimeline.from (qs('.screen-03 .tap-marker'), 0, {opacity: 0, delay: 1.5, top:'-432px', left:'200px'});
        screenTimeline.to (qs('.screen-03 .tap-marker'), 0, {top:'-432px', left:'200px'});
        screenTimeline.to( qs('.screen-03 .tap-marker'), 0.25, {opacity: 0.8, scale: 0.7, delay: 0.5});
        screenTimeline.to( qs('.screen-03 .tap-marker'), 0.35, {opacity: 0, scale: 1}, '+=0.5');

        //Menu appears
        screenTimeline.to( qs('.screen-03-menu'), 0, {opacity: 1, x: '+250px'}, "-=3");
        screenTimeline.to( qs('.screen-03-menu'), 1, {x: '+55px'});

        //second click - menu dissapears
        screenTimeline.from (qs('.screen-03-menu .tap-marker'), 0, {opacity: 0, delay: 1.5});
        screenTimeline.to( qs('.screen-03-menu .tap-marker'), 0.25, {opacity: 0.8, scale: 0.7, delay: 0.5});
        screenTimeline.to( qs('.screen-03-menu .tap-marker'), 0.35, {opacity: 0, scale: 1}, '+=0.5');
        screenTimeline.to( qs('.screen-03-menu'), 1, {x: '+250px'});*/

        //third click - opening article
        screenTimeline.from (qs('.screen-03 .tap-marker'), 0, {opacity: 0, delay: 1.5, top:'-245px', left:'60px'});
        screenTimeline.to (qs('.screen-03 .tap-marker'), 0, {top:'-245px', left:'60px'});
        screenTimeline.to( qs('.screen-03 .tap-marker'), 0.25, {opacity: 0.8, scale: 0.7, delay: 0.5});
        screenTimeline.to( qs('.screen-03 .tap-marker'), 0.35, {opacity: 0, scale: 1}, '+=0.5');

        //Screen 4
        screenTimeline.to( qs('.screen-04'), 0, {opacity: 1, x: '+250px'}, "-=3");
        screenTimeline.to( qs('.screen-04'), 1, {x: '0', delay: 2.5}, '-=1.5');
        screenTimeline.to (qs('.screen-04 .tap-marker'), 0, {bottom:'400px', left:'180px'});
        screenTimeline.from( qs('.screen-04 .tap-marker'), 0.35, {opacity: 0, delay: 4});
        screenTimeline.to( qs('.screen-04 .tap-marker'), 0.25, {scale: 0.7, delay: 0.5});
        screenTimeline.to( qs('.screen-04 .tap-marker'), 0.35, {opacity: 0, scale: 1}, '+=0.5');
        screenTimeline.to( qs('.screen-04'), 1, {delay: 0.5});

        //Screen 5
        screenTimeline.to( qs('.screen-05'), 0, {opacity: 1, x: '+250px'}, "-=3");
        screenTimeline.to( qs('.screen-05'), 1, {x: '0'}, '-=1.5');
        screenTimeline.from( qs('.screen-05 .tap-marker'), 0.35, {opacity: 0, delay: 2});
        screenTimeline.to( qs('.screen-05 .tap-marker'), 0.25, {scale: 0.7, delay: 0.5});
        screenTimeline.to( qs('.screen-05 .tap-marker'), 0.35, {opacity: 0, scale: 1}, '+=0.5');
        screenTimeline.to( qs('.screen-05'), 0.5, {opacity: 0, delay: 1.5});

        //Return to screen 4
        screenTimeline.to( qs('.screen-05'), 1, {opacity: 0, x: '+250px', delay: 0.5});
        screenTimeline.to( qs('.screen-04'), 0, {opacity: 1, x: '-250px'}, "-=3");
        screenTimeline.to( qs('.screen-04'), 1, {x: '0'}, '-=1.5');

        //Click to open search bar
        screenTimeline.from (qs('.screen-04 .tap-marker'), 0, {opacity: 0, delay: 1.5, bottom:'40px', left:'100px'});
        screenTimeline.to (qs('.screen-04 .tap-marker'), 0, {bottom:'40px', left:'100px'});
        screenTimeline.to( qs('.screen-04 .tap-marker'), 0.25, {opacity: 0.8, scale: 0.7, delay: 0.5});
        screenTimeline.to( qs('.screen-04 .tap-marker'), 0.35, {opacity: 0, scale: 1}, '+=0.5');

        //Screen 6
        screenTimeline.from( qs('.screen-06'), 0, {opacity: 0, y: '25%'});
        screenTimeline.to( qs('.screen-06'), 1, {opacity: 1} );
    }

    window.addEventListener('load', start);

}());




