// Bootstrap js everything
import 'bootstrap';

// own SCSS file
import './main.scss';

// add jQuery
import '../node_modules/jquery';

// add popper.js
import '../node_modules/popper.js';

document.querySelector('#changeTheColorOfH1').addEventListener('click', function(){
    document.querySelector('#new-block-so-great').style.display = 'block';
});

// $(document).ready(function(){
//     $('#changeTheColorOfH1').on('click', function(){
//         $('h1').css('color', '#007FCC !important');
//     });
// });