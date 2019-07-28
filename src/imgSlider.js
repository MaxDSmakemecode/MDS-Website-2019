export default function imgSlider(){
    (function($){
            var mdsImage = $('.mds-image');

        $(document).on('click', '.mds-image', function(){
            if(!$(this).hasClass('mds-active-layer')){
                mdsNavi($(this));
            }
        })


        // add active classes 

        $(mdsImage).first().addClass('mds-active-layer');
        $(mdsImage).first().addClass('mds-active');

        $(mdsImage).last().addClass('mds-nav-left');
        $(mdsImage[1]).addClass('mds-nav-right');

        // add navigation function
        function mdsNavi(mdsObject){
            var mdsActive = $('.mds-active-layer');

            $('.mds-nav-left').removeClass('mds-nav-left');
            $('.mds-nav-right').removeClass('mds-nav-right');

            mdsActive.removeClass('mds-active-layer');
            $(mdsObject).addClass('mds-active-layer');
            mdsActive.removeClass('mds-active');
            $(mdsObject).addClass('mds-active');

            if($(mdsObject).prev().hasClass('mds-image')){
                $(mdsObject).prev().addClass('mds-nav-left');
            }
            else{
                $('.mds-image').last().addClass('mds-nav-left');
            }
            if($(mdsObject).next().hasClass('mds-image')){
                $(mdsObject).next().addClass('mds-nav-right');
            }
            else{
                $('.mds-image').first().addClass('mds-nav-right');
            }
        }

        mdsSlideAuto();

        function mdsSlideAuto(){

            var mdsTime = 3000;

            if($('.mds-active-layer').next().hasClass('mds-image')){
                var activeNext = $('.mds-active-layer').next();
            }
            else{
                var activeNext = $('.mds-image').first();
            }

            var mdsActive = $('.mds-active-layer');

            $('.mds-nav-left').removeClass('mds-nav-left');
            $('.mds-nav-right').removeClass('mds-nav-right');

            mdsActive.removeClass('mds-active-layer');
            $(activeNext).addClass('mds-active-layer');
            mdsActive.removeClass('mds-active');
            $(activeNext).addClass('mds-active');

            if($(activeNext).prev().hasClass('mds-image')){
                $(activeNext).prev().addClass('mds-nav-left');
            }
            else{
                $('.mds-image').last().addClass('mds-nav-left');
            }
            if($(activeNext).next().hasClass('mds-image')){
                $(activeNext).next().addClass('mds-nav-right');
            }
            else{
                $('.mds-image').first().addClass('mds-nav-right');
            }

            setTimeout(function(){
                mdsSlideAuto()
            }, mdsTime);
        }
    }(jQuery))
}