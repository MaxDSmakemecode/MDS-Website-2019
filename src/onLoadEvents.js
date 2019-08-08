export default function onLoadEvents(){
    // slogan text animation on front page
    const sloganAnimation = document.querySelector('.hero-title-first');
    const sloganAnimationSecond = document.querySelector('.hero-title-second');
    sloganAnimation.classList.add('title-first--animation');
    sloganAnimationSecond.classList.add('title-second--animation');
}