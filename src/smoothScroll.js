export default function smoothScroll(){
    // at the time of this writing the only cross browser non-buggy smooth scroll solution seemed to be this jQuery code in combination with a Mozzila specific css scroll-behavior smoooth
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
}