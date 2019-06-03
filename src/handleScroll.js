export default function handleScroll(event) {
  const scrollTop = $(this).scrollTop()
  const height = $(this).innerHeight()
  const elementOffsetTop = getElementScrollTop('#lorem')
  const distance = scrollTop + height - elementOffsetTop
  // needs some kind of const to define keydown, so the keyCode outputs true

  if (distance > 0) {
    // do magic
    console.log('magic happens')
      $('.hero-title-first').css('transform', 'translate3d(-' + (distance / 200).toFixed(2) + '%,0,0)');
      if(event.which.keyCode == 40 || event.which.keyCode == 38){
          $('.hero-title-first').css('transform', 'translate3d(-' + (distance / 200).toFixed(2) + '%,0,0)');
      }
      $('.hero-title-second').css('transform', 'translate3d(' + (distance / 200).toFixed(2) + '%,0,0)');
      if(event.which.keyCode == 40 || event.which.keyCode == 38){
          $('.hero-title-second').css('transform', 'translate3d(' + (distance / 200).toFixed(2) + '%,0,0)');
      }
  }
}

function getElementScrollTop(element) {
  return $(element).offset().top
}
