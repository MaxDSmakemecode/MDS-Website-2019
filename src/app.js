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
            console.log(distance);
        $('.hero-title-first').css('transform', 'translate3d(-' + (distance / 200).toFixed(2) + '%,0,0)');
        if(event.which.keyCode == 40 || event.which.keyCode == 38){
            $('.hero-title-first').css('transform', 'translate3d(-' + (distance / 200).toFixed(2) + '%,0,0)');
        }
        $('.hero-title-second').css('transform', 'translate3d(' + (distance / 200).toFixed(2) + '%,0,0)');
        if(event.which.keyCode == 40 || event.which.keyCode == 38){
            $('.hero-title-second').css('transform', 'translate3d(' + (distance / 200).toFixed(2) + '%,0,0)');
        }
    });
});