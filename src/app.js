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
    $(window).on('DOMMouseScroll mousewheel ', function(){
        var height = $(window).scrollTop();
        // check if section is visible (offset().top) and compare it to scroll position, then move font
        // $('.hero-title-first').css('left', ('-' + (height / 50) + '%'));
    })
});