export default function imgSlider(){
    var mdsImage = $('.mds-image');

    $(document).on('click', '.mds-image', function(){
        if(!$(this).hasClass('active')){
            mdsNavi($(this));
        }
    })

    $(mdsImage).first().addClass('active');
    $(mdsImage).first().addClass('mds-active');

    $(mdsImage).last().addClass('mds-navi-left');
    $(mdsImage[1]).addClass('mds-navi-right');

    function mdsNavi(mdsObject){
        var mdsActive = $('.active');

        $('.mds-navi-left').removeClass('mds-navi-left');
        $('.mds-navi-right').removeClass('mds-navi-right');

        mdsActive.removeClass('active');
        $(mdsObject).addClass('active');
        mdsActive.removeClass('mds-active');
        $(mdsObject).addClass('mds-active');

        if($(mdsObject).prev().hasClass('mds-image')){
            $(mdsObject).prev().addClass('mds-nav-left');
        }
        else{
            $(mdsObject).last().addClass('mds-navi-left');
        }
        if($(mdsObject).next().hasClass('mds-image')){
            $(mdsObject).next().addClass('mds-nav-right');
        }
        else{
            $(mdsObject).first().addClass('mds-navi-right');
        }
    }

    mdsSlideAuto();

    var mdsTime = 3000;

    function mdsSlideAuto(){
        if($('.active').next().hasClass('mds-image')){
            var activeNext = $('.active').next();
        }
        else{
            var activeNext = $('.mds-image').first();
        }

        var mdsActive = $('.active');

        $('.mds-navi-left').removeClass('mds-navi-left');
        $('.mds-navi-right').removeClass('mds-navi-right');

        mdsActive.removeClass('active');
        $(activeNext).addClass('active');
        mdsActive.removeClass('mds-active');
        $(activeNext).addClass('mds-active');

        if($(activeNext).prev().hasClass('mds-image')){
            $(activeNext).prev().addClass('mds-nav-left');
        }
        else{
            $(activeNext).last().addClass('mds-navi-left');
        }
        if($(activeNext).next().hasClass('mds-image')){
            $(activeNext).next().addClass('mds-nav-right');
        }
        else{
            $(activeNext).first().addClass('mds-navi-right');
        }
    }

    setTimeout(function(){
        mdsSlideAuto()
    }, mdsTime);
}