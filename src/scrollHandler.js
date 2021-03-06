export default function scrollHandler(){
    // slide in elements when scrolled to a particular point 

    // debounce function to reduce function call amount over scroll (provided by lodash)
    function debounce(func, wait = 20, immediate = true){
        let timeout;
        return function(){
            let context = this, args = arguments;
            let later = function(){
                timeout = null;
                if(!immediate)func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if(callNow)func.apply(context, args);
        };
    };

    // grab all scroll interactive slide in
    const imagesForFadeIn = document.querySelectorAll('.port-slide--in');

    function checkSlide(){
        imagesForFadeIn.forEach(fadeInImage => {
            // half way through the image
            const elementTop = window.scrollY + fadeInImage.getBoundingClientRect().top + fadeInImage.getBoundingClientRect().height / 2;
            // bottom of the image
            const isHalfShown = window.scrollY + window.innerHeight > elementTop;
            const isNotScrolledPast = window.scrollY < window.scrollY + fadeInImage.getBoundingClientRect().top + fadeInImage.getBoundingClientRect().height;

            if(isHalfShown && isNotScrolledPast){
                fadeInImage.classList.add('port-slide-in--active');
            }
        })
        // console log a DOM node (console.log(fadeInImage)), then right click on returned node and click "Store as global variable";
        // 
    }

    // window event scroll
    // change the wait amount to customize amount of function calls in 'debounce(checkSlide, 500)' for example to have a function call every half second 
    if(window.innerWidth >= '992'){
        window.addEventListener('scroll', debounce(checkSlide));
    }
    else{
        imagesForFadeIn.forEach(fadeInImageForMobile => {
            fadeInImageForMobile.classList.add('port-slide-in--active');
        })
    }
}