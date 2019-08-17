// Bootstrap js everything
import 'bootstrap'

// own SCSS file
import './main.scss'

// add jQuery
import '../node_modules/jquery'

// add popper.js
import '../node_modules/popper.js'

// add onload events
import onLoadEvents from './onLoadEvents'

// add mouse following background event
import mouseFollower from './mouseFollower'

// add scroll events
import scrollHandler from './scrollHandler'

// slider
import imgSlider from './imgSlider'

// calling all eventsafter DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  onLoadEvents();
  mouseFollower();
  scrollHandler();
  imgSlider();
})