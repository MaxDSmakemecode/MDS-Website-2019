export default function mouseFollower(){
    function mouseFollowingFunction(){
        // fade in mouse following image
        const mouseFollowImg = document.querySelector('.mousefollow-bg');
        setTimeout(function(){
            mouseFollowImg.classList.add('opacity-on-quarter--element');
        }, 500);

        // mouse following image
        function move(event){
            const w = window.innerWidth,
                h = window.innerHeight,
                mouseX = event.clientX,
                mouseY = event.clientY,
                mouseFollowImgX = - (mouseX / w) * 100,
                mouseFollowImgY = - (mouseY / h) * 100;
            
            mouseFollowImg.style['transform'] = 'translate3d(' + mouseFollowImgX + 'px, ' + mouseFollowImgY + 'px, 0)';
        }

        // window.addEventListener('resize', move);
        window.addEventListener('mousemove', move);

        // fade out on scroll
        document.addEventListener('scroll', function(){
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                mouseFollowImg.classList.remove('opacity-on-quarter--element');
            }
            else{
                mouseFollowImg.classList.add('opacity-on-quarter--element');
            }
        })
    }

    if(window.innerWidth > '992'){
        mouseFollowingFunction();
    }
    else{
        mouseFollowingFunction = null;
    }
}