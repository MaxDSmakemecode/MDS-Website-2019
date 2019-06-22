export default function mouseFollower(){
    // fade in mouse following image
    setTimeout(function(){
        $('.mousefollow-bg').fadeIn(500).removeClass('.hide--element')
    },750)

    // mouse following image
    $('.mousefollow-bg').on('mousemove', function(e){
        const moveX = (e.pageX * -1 / 15)
        const moveY = (e.pageY * -1 / 15)
        $(this).css('background-position', moveX + 'px ' + moveY + 'px')
    })

    // fade out on scroll
    $(window).on('scroll', function(){
        const height = $(window).scrollTop();
        if(height > 0){
            $('.mousefollow-bg').fadeOut(500)
        }
        else{
            $('.mousefollow-bg').fadeIn(500)
        }
    })
}