function updateSlides(elements, index) {
    elements.forEach((element, i) => {
      element.classList.remove("mds-active")
      element.classList.remove("mds-slider-first")
      if (index === i) {
        element.classList.add("mds-active")
      }
    })
  }
  
  export default function imgSlider(slider) {
    const slides = slider.querySelectorAll(".mds-slider")
    const prevButton = slider.querySelector(".mds-prev")
    const nextButton = slider.querySelector(".mds-next")
  
    let activeIndex = 0
  
    function handleLeftClick() {
      if (activeIndex === 0) {
        activeIndex = slides.length - 1
      } else {
        activeIndex--
      }
  
      updateSlides(slides, activeIndex)
    }
  
    function handleRightClick() {
      if (activeIndex === slides.length - 1) {
        activeIndex = 0
      } 
      else {
        activeIndex++
      }
  
      updateSlides(slides, activeIndex)
    }
  
    prevButton.addEventListener("click", handleLeftClick)
    nextButton.addEventListener("click", handleRightClick)
  }