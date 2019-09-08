export default function imgSlider(){

    // duration of how long a slide stays static
    const slideInterval = 4000;

    // get all 'figure' elements as an array
    function getFigures(){
        return document.getElementById('port-image__carousel').getElementsByTagName('figure');
    }

    // change the slides with css classes
    function moveForward(){
        let pointer = 0;
        let figures = getFigures();

        for(var i = 0; i < figures.length; i++){
            if(figures[i].className == 'visible-first' || figures[i].className == 'visible'){
                figures[i].className = 'hidden';
                pointer = i;
            }
        }
        if(++pointer == figures.length){
            pointer = 0;
        }
        figures[pointer].className = 'visible';
        setTimeout(moveForward, slideInterval);
    }
    
    // function for the slide animation with the selected slide interval
    function startPlayback(){
        setTimeout(moveForward, slideInterval);
    }

    // call the slide animation
    startPlayback();
}