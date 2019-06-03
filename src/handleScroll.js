export default function handleScroll(event) {
  const scrollTop = $(this).scrollTop()
  const height = $(this).innerHeight()
  const elementOffsetTop = getElementScrollTop('#lorem')
  const distance = scrollTop + height - elementOffsetTop

  if (distance > 0) {
    // do magic
    console.log('magic happens')
  }
}

function getElementScrollTop(element) {
  return $(element).offset().top
}
