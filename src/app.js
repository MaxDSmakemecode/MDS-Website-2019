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

// add nav toggle class for nav styling
import navStyler from './navStyler'

// smooth scrolling
import burgerNav from './burgerNav'

// smooth scrolling
import smoothScroll from './smoothScroll'

// add mouse following background event
import mouseFollower from './mouseFollower'

// add scroll events
import scrollHandler from './scrollHandler'

// slider
import imgSlider from './imgSlider'

// form
import formValidation from './form'

// calling all eventsafter DOM is loaded
document.addEventListener('DOMContentLoaded', function() {  
  onLoadEvents();
  navStyler();
  smoothScroll();
  mouseFollower();
  burgerNav();
  scrollHandler();
  formValidation();

  // multiple slider call
  const sliderOne = document.querySelector("#mds-slider-1");
  const sliderTwo = document.querySelector("#mds-slider-2");
  const sliderThree = document.querySelector("#mds-slider-3");
  const sliderFour = document.querySelector("#mds-slider-4");
  const sliderFive = document.querySelector("#mds-slider-5");
  const sliderSix = document.querySelector("#mds-slider-6");

  const sliders = [sliderOne, sliderTwo, sliderThree, sliderFour, sliderFive, sliderSix]

  sliders.forEach(slider => {
    imgSlider(slider)
  })
})