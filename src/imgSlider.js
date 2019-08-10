export default function imgSlider(){
    const imgContainer = document.getElementById('mds-img-container');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    const images = ['mockup_heilpraktikerin_heinrich', 'MDS-Website-2_01_01', 'MDS-Website-2_01_02'];

    let i = images.length;
    
    next.onClick = () => {
        i = (i < images.length) ? (i = i + 1) : (i = 1);
        imgContainer.innerHTML = '<img alt= '
    }
}