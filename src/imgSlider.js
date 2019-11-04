function updateSlides(elements, index) {
    elements.forEach((element, i) => {
      element.classList.remove("is-active")
      if (index === i) {
        element.classList.add("is-active")
      }
    })
  }
  
  export default function imgSlider(slider) {
    const slides = slider.querySelectorAll(".slider")
    const prevButton = slider.querySelector(".prev")
    const nextButton = slider.querySelector(".next")
  
    let activeIndex = 0
  
    function handleLeftClick(event) {
      if (activeIndex === 0) {
        activeIndex = slides.length - 1
      } else {
        activeIndex--
      }
  
      updateSlides(slides, activeIndex)
    }
  
    function handleRightClick(event) {
      if (activeIndex === slides.length - 1) {
        activeIndex = 0
      } else {
        activeIndex++
      }
  
      updateSlides(slides, activeIndex)
    }
  
    prevButton.addEventListener("click", handleLeftClick)
    nextButton.addEventListener("click", handleRightClick)
  }