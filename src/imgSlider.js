export default function imgSlider(){
    const imgContainer = document.getElementById('mds-img-container');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    const images = ['hh01.jpg', 'hh02.jpg', 'hh03.jpg'];

    let i = images.length;
    

    // function for next slide
    next.onClick = () => {
        i = (i < images.length) ? (i = i + 1) : (i = 1);
        imgContainer.innerHTML = '<img class="img-fluid mds-img" src="' +  images[i - 1] + '">';
    }

    // function for previous slide
    prev.onClick = () => {
        i = (i < images.length + 1 && i > 1) ? (i = i - 1) : (i = images.length);
        imgContainer.innerHTML = '<img class="img-fluid mds-img" src="' +  images[i - 1] + '">';
    }
}