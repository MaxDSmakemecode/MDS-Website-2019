// export default function onLoadEvents(event) {
//   const scrollTop = $(this).scrollTop()
//   const height = $(this).innerHeight()
//   const elementOffsetTop = getElementScrollTop('#lorem')
//   const distance = scrollTop + height - elementOffsetTop

//   if (distance > 0) {
//     // do magic
//         console.log(distance)
//         $('.hero-title-first').css('transform', 'translate3d(-' + (distance / 200).toFixed(5) + '%,0,0)');
//         $('.hero-title-second').css('transform', 'translate3d(' + (distance / 200).toFixed(5) + '%,0,0)');
//   }
//   else if (distance < 0) {
//     // do magic
//         $('.hero-title-first').css('transform', 'translate3d(' + (distance / 200).toFixed(5) + '%,0,0)');
//         $('.hero-title-second').css('transform', 'translate3d(-' + (distance / 200).toFixed(5) + '%,0,0)');
//   }
// }

// function getElementScrollTop(element) {
//   return $(element).offset().top
// }
export default function onLoadEvents(event){
    setTimeout(function(){
      $('.hero-title-first').animate({
        'opacity': '1'
      },{
        step: function(now, fx){
          $(this).css({'transform': 'translate3d(' + now + '%,0,0)'});
        },
        duration: 150,
        easing: 'swing',
        queue: false,
        complete: function(){
          console.log('animation done');
        }
      })
    }, 250);
    setTimeout(function(){
      $('.hero-title-second').animate({
        'opacity': '1'
      },{
        step: function(now, fx){
          $(this).css({'transform': 'translate3d(' + now + '%,0,0)'});
        },
        duration: 150,
        easing: 'swing',
        queue: false,
        complete: function(){
          console.log('animation done');
        }
      })
    }, 500);
}