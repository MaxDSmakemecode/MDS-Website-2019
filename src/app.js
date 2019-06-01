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
    $('#hero').on('DOMMouseScroll mousewheel', function(event){
        var height = $(window).scrollTop();
        if(event.originalEvent.detail > 0 || event.originalEvent.wheelDeltaY < 0){
            $('.hero-title-first').css('left', ('-' + (height / 50) + '%'));
        }
        else{
            $('.hero-title-first').css('left', ('-' + (height / 50) + '%'));
        }
    })
});