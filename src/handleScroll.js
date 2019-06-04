export default function handleScroll(event) {
  const scrollTop = $(this).scrollTop()
  const height = $(this).innerHeight()
  const elementOffsetTop = getElementScrollTop('#lorem')
  const distance = scrollTop + height - elementOffsetTop

  if (distance > 0) {
    // do magic
        $('.hero-title-first').css('transform', 'translate3d(-' + (distance / 200).toFixed(5) + '%,0,0)');
        $('.hero-title-second').css('transform', 'translate3d(' + (distance / 200).toFixed(5) + '%,0,0)');
  }
}

function getElementScrollTop(element) {
  return $(element).offset().top
}
