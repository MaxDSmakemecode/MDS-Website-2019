export default function onLoadEvents(){
    // slogan text animation on front page
    const sloganAnimation = document.querySelector('.hero-title-first');

    setTimeout(function(){
      sloganAnimation.classList.add('opacity-on--element')
      sloganAnimation.style.transform = 'translate3d(' + 0 + '%,0,0';
    }, 250);

    // sloganAnimation('.hero-title-first', 250);
    // sloganAnimation('.hero-title-second', 500);

    // function sloganAnimation(target, target_delay){
    //   setTimeout(function(){
    //     $(target).animate({
    //       'opacity': '1'
    //     },{
    //       step: function(now){
    //         $(this).css({'transform': 'translate3d(' + now + '%,0,0)'});
    //       },
    //       duration: 150,
    //       easing: 'swing',
    //       queue: false,
    //       complete: function(){
    //         console.log('animation done');
    //       }
    //     })
    //   }, target_delay);
    // }
}