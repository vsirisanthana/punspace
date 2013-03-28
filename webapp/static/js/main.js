$(function() {
    $('#subscribe').on('click', function(){
       console.log('sending');
       $.post('/api/subscribers', {'email':$('#input-email').val()}, function(){alert("Thank you for subscribing, you'll be the first to know when we're open!");$('#input-email').val('');})
       console.log('done sending');

    });
//    var deck = new $.scrolldeck({
//        slides: '.slide',
//        buttons: '.nav a',
//        easing: 'easeInOutExpo'
//    });
//
    Galleria.loadTheme('static/lib/galleria/themes/classic/galleria.classic.min.js');
    Galleria.run('#galleria');

    /*****************************************
     /* Sticky Nav and Nav Updating
     /****************************************/

    var navPos = $('nav').offset().top;

    $(window).on('scroll', function(evt) {
        var scrollTop = $(this).scrollTop(),
            winHeight = $(window).height();

        window.clearTimeout(window.timeout);

//        console.log('scrollTop', scrollTop);
//        console.log('navPos', navPos);

        window.timeout = setTimeout(function() {
            // Set the sticky nav
            if (scrollTop > navPos) {
                $('nav').not('.sticky').addClass('sticky');
            } else {
                $('nav.sticky').removeClass('sticky');
            }

            // Determine the current section
//            var collection = $('section'),
//                currSection;
//
//            for (var i=0; i < collection.length; i++) {
//                currSection = collection.eq(i);
//
//                var y11 = currSection.offset().top,
//                    y12 = y11 + currSection.outerHeight(),
//                    y21 = scrollTop,
//                    y22 = scrollTop + winHeight,
//                    yOverlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
//
//                if (yOverlap >= winHeight / 2) {
//                    activateNewSection(currSection);
//                    return;
//                }
//            }
        }, 10);
    });

//    function activateNewSection(sectionElm) {
//        // Set the hash
//        // (Currently Disabled)
//        // var hash = sectionElm.attr('class').replace(/\sdesktop-only/gi, '');
//        // window.location.hash = hash;
//
//        // Update the nav
//        var currentIndex = sectionElm.index('section'),
//            currClass = 'is-current-nav';
//
//        $('.' + currClass).removeClass(currClass);
//        $('.nav-links li').eq(currentIndex).addClass(currClass);
//    }

});
