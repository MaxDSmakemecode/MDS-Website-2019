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

// toggle burger nav
import burgerNav from './burgerNav'

// smooth scrolling
import smoothScroll from './smoothScroll'

// add mouse following background event
import mouseFollower from './mouseFollower'

// add scroll events
import scrollHandler from './scrollHandler'

// slider
import imgSlider from './imgSlider'

// calling all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {  
  onLoadEvents();
  burgerNav();
  smoothScroll();
  mouseFollower();
  scrollHandler();

  // smooth scroll to section
  // const home = document.querySelector('#hero');
  // const about = document.querySelector('#about');
  // const portfolio = document.querySelector('#mds-portfolio');
  // const contact = document.querySelector('#contact');

  // home.addEventListener('click', function(){
  //   smoothScroll('#hero-target', 1000);
  // })
  // about.addEventListener('click', function(){
  //   smoothScroll('#about-target', 1000);
  // })
  // portfolio.addEventListener('click', function(){
  //   smoothScroll('#portfolio-title-page', 1000);
  // })
  // contact.addEventListener('click', function(){
  //   smoothScroll('#contact-target', 1000);
  // })

  // multiple slider call
  const sliderOne = document.querySelector("#mds-slider-1");
  const sliderTwo = document.querySelector("#mds-slider-2");
  const sliderThree = document.querySelector("#mds-slider-3");
  const sliderFour = document.querySelector("#mds-slider-4");
  const sliderFive = document.querySelector("#mds-slider-5");
  const sliderSix = document.querySelector("#mds-slider-6");
  const sliderSeven = document.querySelector("#mds-slider-7");
  const sliderEight = document.querySelector("#mds-slider-8");
  const sliderNine = document.querySelector("#mds-slider-9");
  const sliderTen = document.querySelector("#mds-slider-10");

  const sliders = [sliderOne, sliderTwo, sliderThree, sliderFour, sliderFive, sliderSix, sliderSeven, sliderEight, sliderNine, sliderTen]

  sliders.forEach(slider => {
    imgSlider(slider)
  })
})