export default function onLoadEvents(){
    // slogan text animation on front page
    const sloganAnimation = document.querySelector('.hero-title__first');
    const sloganAnimationSecond = document.querySelector('.hero-title__second');
    setTimeout(function(){
        sloganAnimation.classList.add('title-first--animation');
        sloganAnimationSecond.classList.add('title-second--animation');
    }, 500)
}