// Bootstrap js everything
import 'bootstrap'

// own SCSS file
import './main.scss'

// add jQuery
import '../node_modules/jquery'

// add popper.js
import '../node_modules/popper.js'

$(document).ready(function(){
 
    // scroll font
    // important:                HERE put some more scroll functions like when you scroll by mouse or arrow keys
    $(window).on('DOMMouseScroll mousewheel keydown', function(event){
        var scrollTop = $(window).scrollTop(),
            elementOffset = $('#hero').offset().top,
            distance = (scrollTop - elementOffset);
        $('.hero-title-first').css('left', (+ (10 - (distance / 100)) + '%'));
        if(event.which.keyCode == 40 || event.which.keyCode == 38){
            $('.hero-title-first').css('left', ('-' + (distance / 100) + '%'));
        }
        $('.hero-title-second').css('left', ('+' + (distance / 100) + '%'));
        if(event.which.keyCode == 40 || event.which.keyCode == 38){
            $('.hero-title-second').css('left', ('+' + (distance / 100) + '%'));
        }
    });
});