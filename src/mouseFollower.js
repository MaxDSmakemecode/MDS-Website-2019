export default function mouseFollower(){
    // fade in mouse following image
    setTimeout(function(){
        $('.mousefollow-bg').fadeIn(500).removeClass('.hide--element');
    },750);

    // mouse following image
    $('.mousefollow-bg').on('mousemove', function(e){
        var moveX = (e.pageX * -1 / 15);
        var moveY = (e.pageY * -1 / 15);
        $(this).css('background-position', moveX + 'px ' + moveY + 'px');
    });
}