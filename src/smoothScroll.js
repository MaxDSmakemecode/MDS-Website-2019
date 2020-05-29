export default function smoothScroll(){
    $('a[href^="#"]').on('click',function(e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);
      $('html, body').stop().animate({
      'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
      window.location.hash = target;
      });
    });
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
    // const targetOfScroll = document.querySelector(scrollingTarget);
    // const targetingPosition = targetOfScroll.getBoundingClientRect().top;
    // const startingPosition = window.pageYOffset;
    // // const distanceScrolled = targetingPosition - startingPosition;
    // let startingTime = null;

    // function animation(currentTime){
    //   if(startingTime === null) startingTime = currentTime;
    //   let timeElapsed = currentTime - startingTime;
    //   let run = ease(timeElapsed, startingPosition, targetingPosition, duration);
    //   window.scrollTo(0, run);
    //   if(timeElapsed < duration) requestAnimationFrame(animation);
    //   // console.log('timeElapsed: ' + timeElapsed + 'duration: ' + duration)
    // }

    // function ease(t,b,c,d){
    //   t /= d / 2;
    //   if(t < 1) return c / 2 * t * t + b;
    //   t--;
    //   return -c / 2 * (t *(t - 2) - 1) + b;
    // }

    // requestAnimationFrame(animation);
}