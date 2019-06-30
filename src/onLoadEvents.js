export default function onLoadEvents(event){

    // slogan text animation on front page
    sloganAnimation('.hero-title-first', 250);
    sloganAnimation('.hero-title-second', 500);

    function sloganAnimation(target, target_delay){
      setTimeout(function(){
        $(target).animate({
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
      }, target_delay);
    }
}