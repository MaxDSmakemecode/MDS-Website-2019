export default function mouseFollower(){
    // fade in mouse following image
    const mouseFollowImg = document.querySelector('.mousefollow-bg');
    setTimeout(function(){
        mouseFollowImg.classList.add('opacity-on--element');
    }, 500);

    // mouse following image
    function move(event){
        const w = window.innerWidth,
              h = window.innerHeight,
              mouseX = event.clientX,
              mouseY = event.clientY,
              mouseFollowImgX = (mouseX / w) * 50,
              mouseFollowImgY = (mouseY / h) * 25;
        
        mouseFollowImg.style['background-position'] = mouseFollowImgX + '%' + mouseFollowImgY + '%';
    }

    window.addEventListener('resize', move);
    window.addEventListener('mousemove', move);

    // fade out on scroll
    document.addEventListener('scroll', function(){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            mouseFollowImg.classList.remove('opacity-on--element');
        }
        else{
            mouseFollowImg.classList.add('opacity-on--element');
        }
    })
}