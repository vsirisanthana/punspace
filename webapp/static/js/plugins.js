// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

/*
 scrolldeck - jQuery scrolldeck to create a vertically scrolling presentation deck
 by John Polacek (@johnpolacek)

 Dual licensed under MIT and GPL.
 */

(function($) {
    $.scrolldeck = function(options) {


        // VARS

        var currIndex = 0,
            buttons,
            slides,
            scrollpoints = [],
            sections = [],
            windowHeight = $(window).height(),
            i;

        var defaults = {
            buttons: '.nav-button',
            slides: '.slide',
            duration: 600,
            easing: 'easeInOutExpo',
            offset: 0
        };


        // INIT

        var scrolldeck = this;
        scrolldeck.settings = {};

        var init = function() {

            scrolldeck.settings = $.extend({}, defaults, options);

            buttons = $(scrolldeck.settings.buttons);
            slides = $(scrolldeck.settings.slides);
            scrolldeck.controller = $.scrollorama({blocks:slides, offset:scrolldeck.settings.offset});

            // add animations with scrollorama
            var anim;
            // ANIMATE INS
            for (i=0; i<$('.animate-in').length; i++) {
                anim = $('.animate-in').eq(i);
                switch (anim.attr('data-animation')) {
                    case 'fly-in-left':
                        anim
                            .parent().css('overflow','hidden');
                        scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'left', start:-1200 });
                        break;
                    case 'fly-in-right':
                        anim
                            .parent().css('overflow','hidden');
                        scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'right', start:-1200 });
                        break;
                    case 'space-in':
                        scrolldeck.controller.animate(anim, { delay: windowHeight*0.8, duration: windowHeight*0.2, property:'letter-spacing', start:40 });
                        scrolldeck.controller.animate(anim, { delay: windowHeight*0.8, duration: windowHeight*0.2, property:'opacity', start:0 });
                        break;
                    case 'fade-in':
                        scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'opacity', start:0 });
                        break;
                    default:
                        scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'opacity', start:0 });
                }
            }

            // ANIMATE BUILDS
            for (i=0; i<$('.animate-build').length; i++) {
                anim = $('.animate-build').eq(i);
                switch (anim.attr('data-animation')) {
                    case 'fly-in-left':
                        anim.parent().css('overflow','hidden');
                        scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'left', start:-1200, pin:true });
                        break;
                    case 'fly-in-right':
                        anim.parent().css('overflow','hidden');
                        scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'right', start:-1200, pin:true });
                        break;
                    case 'space-in':
                        scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'letter-spacing', start:40, pin:true });
                        scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
                        break;
                    case 'fade-in':
                        scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
                        break;
                    default:
                        scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
                }
            }

            // set slide and animation scrollpoints
            scrollpoints = scrolldeck.controller.getScrollpoints();

            // if nav buttons, create array of section header slide indexes
            for (i=0; i<buttons.length;i++)
                sections.push(slides.index($($(buttons[i]).attr('href'))));

            // event handler for updating current slide index and current nav button
            scrolldeck.controller.onBlockChange(function() {
                // get slide index
                currIndex = scrolldeck.controller.blockIndex;

                // then update nav
                updateNav();
            });

            // Nav button click event
            buttons.on('click', function(e) {
                e.preventDefault();
                var slide = $($(this).attr('href'));
                currIndex = slide.index();
                scrollToSlide(slide);
            });

            // Keyboard events
            $(document).on('keydown', function(e){
                // up/left arrow = scroll up
                if ((e.keyCode == 37 || e.keyCode == 38) && currIndex !== 0) {
                    scrollToSlide(getPrevScrollpoint());
                }
                // down/right arrow, space = scroll down
                else if ((e.keyCode == 39 || e.keyCode == 32 || e.keyCode == 40) && currIndex != slides.length-1) {
                    scrollToSlide(getNextScrollpoint());
                }
            });

            // if slides are images, assign height to auto for proportional scaling
            for (i=0; i<slides.length; i++) {
                var el = slides.eq(i);
                if (el.prop('tagName').toUpperCase() === 'IMG') {
                    el.css('height','auto');
                }
            }

            // if last slide is shorter than height of window, increase height
            var lastSlide = slides.eq(slides.length-1);
            if (lastSlide.outerHeight() < $(window).height()) {
                lastSlide.height(lastSlide.height()+$(window).height()-lastSlide.outerHeight());
            }

            updateNav();
        };



        // PRIVATE FUNCTIONS

        function updateNav() {
            if (buttons) {
                buttons.removeClass('current');
                var currSection = -1;
                for (i=0; i<sections.length;i++) {
                    if (currIndex >= sections[i]) {
                        currSection = i;
                    }
                }
                if (currSection != -1) {
                    buttons.eq(currSection).addClass('current');
                }
            }
        }

        function scrollToSlide(slide) {
            $(window)._scrollable().stop();
            $(window).scrollTo(slide, {
                duration: scrolldeck.settings.duration,
                easing: scrolldeck.settings.easing,
                offset: scrolldeck.settings.offset
            });
        }

        function getNextScrollpoint() {
            return getScrollpoint(2);
        }

        function getPrevScrollpoint() {
            return getScrollpoint(-1);
        }

        function getScrollpoint(n) {
            var scrollTop = $(window).scrollTop();
            // make temp dup scrollpoints array
            var points = scrollpoints.slice(0);
            // add current scroll position to new temp array
            points.push(scrollTop);
            // do sort to find nearest scrollpoint
            points.sort(function(a,b){return a - b;});
            return points[points.indexOf(scrollTop)+n];
        }


        // INIT
        init();
    };

})(jQuery);

/*
 scrollorama - The jQuery plugin for doing cool scrolly stuff
 by John Polacek (@johnpolacek)

 Dual licensed under MIT and GPL.
 */

(function($) {
    $.scrollorama = function(options) {
        var scrollorama = this,
            blocks = [],
            browserPrefix = '',
            onBlockChange = function() {},
            latestKnownScrollY = 0,
            ticking = false,
            requestAnimFrame =	window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                },
            defaults = {offset:0, enablePin: true};

        scrollorama.settings = $.extend({}, defaults, options);
        scrollorama.blockIndex = 0;

        if (options.blocks === undefined) { alert('ERROR: Must assign blocks class selector to scrollorama plugin'); }

        // PRIVATE FUNCTIONS
        function init() {
            var i, block, didScroll = false;
            if (typeof scrollorama.settings.blocks === 'string') { scrollorama.settings.blocks = $(scrollorama.settings.blocks); }

            // set browser prefix
            if ($.browser.mozilla) { browserPrefix = '-moz-'; }
            if ($.browser.webkit) { browserPrefix = '-webkit-'; }
            if ($.browser.opera) { browserPrefix = '-o-'; }
            if ($.browser.msie) { browserPrefix = '-ms-'; }

            // create blocks array to contain animation props
            $('body').css('position','relative');
            for (i=0; i<scrollorama.settings.blocks.length; i++) {
                block = scrollorama.settings.blocks.eq(i);
                blocks.push({
                    block: block,
                    top: block.offset().top - parseInt(block.css('margin-top'), 10),
                    pin: 0,
                    animations:[]
                });
            }

            // convert block elements to absolute position
            if (scrollorama.settings.enablePin.toString() === 'true') {
                for (i=0; i<blocks.length; i++) {
                    blocks[i].block
                        .css('position', 'absolute')
                        .css('top', blocks[i].top);
                }
            }

            $('body').prepend('<div id="scroll-wrap"></div>');

            latestKnownScrollY = 0;
            ticking = false;
            $(window).scroll( onScroll );
        }

        function onScroll() {
            latestKnownScrollY = window.scrollY;
            requestTick();
        }

        function requestTick() {
            if(!ticking) {
                requestAnimFrame(function(){
                    onScrollorama();
                    update();
                });
            }
            ticking = true;
        }

        function update() {
            // reset the tick so we can
            // capture the next onScroll
            ticking = false;
        }

        function onScrollorama() {
            var scrollTop = $(window).scrollTop(),
                currBlockIndex = getCurrBlockIndex(scrollTop),
                i, j, anim, startAnimPos, endAnimPos, animPercent, animVal;

            // update all animations
            for (i=0; i<blocks.length; i++) {

                // go through the animations for each block
                if (blocks[i].animations.length) {
                    for (j=0; j<blocks[i].animations.length; j++) {
                        anim = blocks[i].animations[j];

                        // if above current block, settings should be at start value
                        if (i > currBlockIndex) {
                            if (currBlockIndex !== i-1 && anim.baseline !== 'bottom') {
                                setProperty(anim.element, anim.property, anim.startVal);
                            }
                            if (blocks[i].pin) {
                                blocks[i].block
                                    .css('position', 'absolute')
                                    .css('top', blocks[i].top);
                            }
                        }

                        // if below current block, settings should be at end value
                        // unless on an element that gets animated when it hits the bottom of the viewport
                        else if (i < currBlockIndex) {
                            setProperty(anim.element, anim.property, anim.endVal);
                            if (blocks[i].pin) {
                                blocks[i].block
                                    .css('position', 'absolute')
                                    .css('top', (blocks[i].top + blocks[i].pin));
                            }
                        }

                        // otherwise, set values per scroll position
                        if (i === currBlockIndex || (currBlockIndex === i-1 && anim.baseline === 'bottom')) {
                            // if block gets pinned, set position fixed
                            if (blocks[i].pin && currBlockIndex === i) {
                                blocks[i].block
                                    .css('position', 'fixed')
                                    .css('top', 0);
                            }

                            // set start and end animation positions
                            startAnimPos = blocks[i].top + anim.delay;
                            if (anim.baseline === 'bottom') { startAnimPos -= $(window).height(); }
                            endAnimPos = startAnimPos + anim.duration;

                            // if scroll is before start of animation, set to start value
                            if (scrollTop < startAnimPos) {
                                setProperty(anim.element, anim.property, anim.startVal);
                            }

                            // if scroll is after end of animation, set to end value
                            else if (scrollTop > endAnimPos) {
                                setProperty(anim.element, anim.property, anim.endVal);
                                if (blocks[i].pin) {
                                    blocks[i].block
                                        .css('position', 'absolute')
                                        .css('top', (blocks[i].top + blocks[i].pin));
                                }
                            }

                            // otherwise, set value based on scroll
                            else {
                                // calculate percent to animate
                                animPercent = (scrollTop - startAnimPos) / anim.duration;
                                // account for easing if there is any
                                if ( anim.easing && $.isFunction( $.easing[anim.easing] ) ) {
                                    animPercent = $.easing[anim.easing]( animPercent, animPercent*1000, 0, 1, 1000 );
                                }
                                // then multiply the percent by the value range and calculate the new value
                                animVal = anim.startVal + (animPercent * (anim.endVal - anim.startVal));
                                setProperty(anim.element, anim.property, animVal);
                            }
                        }
                    }
                }
            }

            // update blockIndex and trigger event if changed
            if (scrollorama.blockIndex !== currBlockIndex) {
                scrollorama.blockIndex = currBlockIndex;
                onBlockChange();
            }
        }

        function getCurrBlockIndex(scrollTop) {
            var currBlockIndex = 0, i;
            for (i=0; i<blocks.length; i++) {
                // check if block is in view
                if (blocks[i].top <= scrollTop - scrollorama.settings.offset) { currBlockIndex = i; }
            }
            return currBlockIndex;
        }

        function setProperty(target, prop, val) {
            var scaleCSS, currentPosition;
            if (prop === 'rotate' || prop === 'zoom' || prop === 'scale') {
                if (prop === 'rotate') {
                    target.css(browserPrefix+'transform', 'rotate('+val+'deg)');
                } else if (prop === 'zoom' || prop === 'scale') {
                    scaleCSS = 'scale('+val+')';
                    if (browserPrefix !== '-ms-') {
                        target.css(browserPrefix+'transform', scaleCSS);
                    } else {
                        target.css('zoom', scaleCSS);
                    }
                }
            }
            else if(prop === 'background-position-x' || prop === 'background-position-y' ) {
                currentPosition = target.css('background-position').split(' ');
                if(prop === 'background-position-x') {
                    target.css('background-position',val+'px '+currentPosition[1]);
                }
                if(prop === 'background-position-y') {
                    target.css('background-position', currentPosition[0]+' '+val+'px');
                }
            }
            else if(prop === 'text-shadow' ) {
                target.css(prop,'0px 0px '+val+'px #ffffff');
            } else {
                target.css(prop, val);
            }
        }


        // PUBLIC FUNCTIONS
        scrollorama.animate = function(target) {
            var targetIndex,
                targetBlock,
                anim,
                offset,
                i, j;
            /*
             target		= animation target
             arguments	= array of animation parameters
             anim		= object that contains all animation params (created from arguments)
             offset		= positioning helper for pinning

             animation parameters:
             delay		= amount of scrolling (in pixels) before animation starts
             duration	= amount of scrolling (in pixels) over which the animation occurs
             property	= css property being animated
             start		= start value of the property
             end			= end value of the property
             pin			= pin block during animation duration (applies to all animations within block)
             baseline	= top (default, when block reaches top of viewport) or bottom (when block first comies into view)
             easing		= just like jquery's easing functions
             */

            // if string, convert to DOM object
            if (typeof target === 'string') { target = $(target); }

            // find block of target
            for (i=0; i<blocks.length; i++) {
                if (blocks[i].block.has(target).length) {
                    targetBlock = blocks[i];
                    targetIndex = i;
                }
            }

            // add each animation to the blocks animations array from function arguments
            for (i=1; i<arguments.length; i++) {

                anim = arguments[i];

                // for top/left/right/bottom, set relative positioning if static
                if (anim.property === 'top' || anim.property === 'left' || anim.property === 'bottom' || anim.property === 'right' ) {
                    if (target.css('position') === 'static') { target.css('position','relative'); }
                    // set anim.start, anim.end defaults
                    cssValue = parseInt(target.css(anim.property),10);
                    if (anim.start === undefined) {
                        anim.start = isNaN(cssValue) ? 0 : cssValue;
                    } else if (anim.end === undefined) {
                        anim.end = isNaN(cssValue) ? 0 : cssValue;
                    }
                }

                // set anim.start/anim.end defaults for rotate, zoom/scale, letter-spacing
                if (anim.property === 'rotate') {
                    if (anim.start === undefined) { anim.start = 0; }
                    if (anim.end === undefined) { anim.end = 0; }
                } else if (anim.property === 'zoom' || anim.property === 'scale' ) {
                    if (anim.start === undefined) { anim.start = 1; }
                    if (anim.end === undefined) { anim.end = 1; }
                } else if (anim.property === 'letter-spacing' && target.css(anim.property)) {
                    if (anim.start === undefined) { anim.start = 1; }
                    if (anim.end === undefined) { anim.end = 1; }
                }

                if (anim.baseline === undefined) {
                    if (anim.pin || targetBlock.pin || targetIndex === 0) {
                        anim.baseline = 'top';
                    } else {
                        anim.baseline = 'bottom';
                    }
                }

                if (anim.delay === undefined) { anim.delay = 0; }

                targetBlock.animations.push({
                    element: target,
                    delay: anim.delay,
                    duration: anim.duration,
                    property: anim.property,
                    startVal: anim.start !== undefined ? anim.start : parseInt(target.css(anim.property),10),	// if undefined, use current css value
                    endVal: anim.end !== undefined ? anim.end : parseInt(target.css(anim.property),10),			// if undefined, use current css value
                    baseline: anim.baseline !== undefined ? anim.baseline : 'bottom',
                    easing: anim.easing
                });

                if (anim.pin) {
                    if (targetBlock.pin < anim.duration + anim.delay) {
                        offset = anim.duration + anim.delay - targetBlock.pin;
                        targetBlock.pin += offset;

                        // adjust positions of blocks below target block
                        for (j=targetIndex+1; j<blocks.length; j++) {
                            blocks[j].top += offset;
                            blocks[j].block.css('top', blocks[j].top);
                        }
                    }
                }
            }

            onScrollorama();
        };

        // function for passing blockChange event callback
        scrollorama.onBlockChange = function(f) {
            onBlockChange = f;
        };

        // function for getting an array of scrollpoints
        // (top of each animation block and animation element scroll start point)
        scrollorama.getScrollpoints = function() {
            var scrollpoints = [],i,j,anim;
            for (i=0; i<blocks.length; i++) {
                scrollpoints.push(blocks[i].top);
                // go through the animations for each block
                if (blocks[i].animations.length && blocks[i].pin > 0) {
                    for (j=0; j<blocks[i].animations.length; j++) {
                        anim = blocks[i].animations[j];
                        scrollpoints.push(blocks[i].top + anim.delay + anim.duration);
                    }
                }
            }
            // make sure scrollpoints are in numeric order
            scrollpoints.sort(function(a,b) {return a - b;});
            return scrollpoints;
        };


        // INIT
        init();

        return scrollorama;
    };

    //
    //		Easing functions from jQuery UI
    //
    $.extend($.easing, {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert($.easing.default);
            return $.easing[$.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) { return c/2*t*t + b; }
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) { return c/2*t*t*t + b; }
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) { return c/2*t*t*t*t + b; }
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) { return c/2*t*t*t*t*t + b; }
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t===0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t===0) { return b; }
            if (t===d) { return b+c; }
            if ((t/=d/2) < 1) { return c/2 * Math.pow(2, 10 * (t - 1)) + b; }
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) { return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; }
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158,p=0,a=c;
            if (t===0) { return b; }
            if ((t/=d)===1) { return b+c; }
            if (!p) { p=d*0.3; }
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else{ s = p/(2*Math.PI) * Math.asin (c/a); }
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158,p=0,a=c;
            if (t===0) { return b; }
            if ((t/=d)===1) { return b+c; }
            if (!p) { p=d*0.3; }
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else { s = p/(2*Math.PI) * Math.asin (c/a); }
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158,p=0,a=c;
            if (t===0) { return b; }
            if ((t/=d/2)===2) { return b+c; }
            if (!p) { p=d*(0.3*1.5); }
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else { s = p/(2*Math.PI) * Math.asin (c/a); }
            if (t < 1) { return -0.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; }
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s === undefined) { s = 1.70158; }
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s === undefined) { s = 1.70158; }
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s === undefined) { s = 1.70158; }
            if ((t/=d/2) < 1) { return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b; }
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) { return $.easing.easeInBounce (x, t*2, 0, c, d) * 0.5 + b; }
            return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
        }
    });

})(jQuery);

/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
