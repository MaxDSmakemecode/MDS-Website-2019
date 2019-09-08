export default function scrollHandler(){
    // slide in elements when scrolled to a particular point

    // debounce function to reduce function call amount over scroll
    // function debounce(func, wait = 20, immediate = true){
    //     let timeout;
    //     return function(){
    //         let context = this, args = arguments;
    //         let later = function(){
    //             timeout = null;
    //             if(!immediate)func.apply(context, args);
    //         };
    //         let callNow = immediate && !timeout;
    //         clearTimeout(timeout);
    //         timeout = setTimeout(later, wait);
    //         if(callNow)func.apply(context, args);
    //     };
    // };

    // grab all slides
    const imagesForFadeIn = document.querySelectorAll('.port-slide__in');

    function checkSlide(event){
        imagesForFadeIn.forEach(fadeInImage => {
            // half way through the image
            const slideInAt = (window.scrollY + window.innerHeight) + fadeInImage.offsetHeight / 2;
            // bottom of the image
            const imageBottom = fadeInImage.offsetTop + fadeInImage.offsetHeight;
            const isHalfShown = slideInAt > fadeInImage.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom;
            if(isHalfShown && isNotScrolledPast){
                fadeInImage.classList.remove('port-slide-in__active');      
            }
            else{
                fadeInImage.classList.add('port-slide-in__active');
            }
        })
    }

    // window event scroll
    // change the wait amount to customize amount of function calls in 'debounce(checkSlide, 500)' for example to have a function call every half second 
    window.addEventListener('scroll', checkSlide);
}