export default function scrollHandler(){
    $(window).scroll(function(){
        var windowScroll = $(window).scrollTop();
        var halfElementHeight = $('#hero').innerHeight() / 2;

        // console.log(windowScroll);
        // console.log(halfElementHeight);

        if(windowScroll >= halfElementHeight){
            $('.port-text-box').fadeIn(500);
            setTimeout(function(){
                $('.port-img-box').fadeIn(500);
            }, 500);
        }
    })
}