export default function formValidation(){
    // input fields
    const firstName = document.getElementById('input-first-name');
    const lastName = document.getElementById('input-last-name');
    const email = document.getElementById('input-email');
    const textMessage = document.getElementById('input-text-message');
    const submitButton = document.getElementById('submit-button');

    // form 
    const form = document.getElementById('mds-form');

    // validation colors
    const green = '#4CAF50';
    const red = '#F44336';

    function validateFistName(){
        // check if it's empty
        if(checkIfEmpty(firstName)) return;

        // check if it has only letters
    }

    function checkIfEmpty(field){
        if(isEmpty(field.value.trim())){
            // set field invalid
            setInvalid(field, `${field.name} darf nicht leer sein.`);
            return true
        }else{
            // set field valid
            setValid(field);
            return false
        }
    }

    function isEmpty(value){
        if(value === '') return true;
        return false;
    }
}