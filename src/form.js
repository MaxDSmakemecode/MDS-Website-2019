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

    function validateFirstName(){
        // check if it's empty
        // it returns because when it's empty there is nothing to check any further (has "empty" some letters included? Doesn't make sense)
        if(checkIfEmpty(firstName)) return;

        // check if it has only letters
        if(!checkIfOnlyLetters(firstName)) return;
        return true;
    }

    function checkIfEmpty(field){
        // "trim" removes empty spaces, line breaks etc. from the sides, so below code will output "invalid input" if we have a space for instance in our input
        if(isEmpty(field.value.trim())){
            // set field invalid
            setInvalid(field, `${field.name} darf nicht leer sein.`);

            // same as "ifEmpty" function: if value is empty it returns true and vice versa
            return true
        }else{
            // set field valid
            setValid(field);
            return false
        }
    }

    // if "value" is empty then it returns true, if not false
    function isEmpty(value){
        if(value === '') return true;
        return false;
    }

    function setInvalid(field, message){
        field.className = 'invalid';
        field.nextElementSibling.innerHTML = message;
        field.nextElementSibling.style.color = red;
    }

    function setValid(field){
        field.className = 'valid';
        field.nextElementSibling.innerHTML = '';
    }

    function checkIfOnlyLetters(field){
        if(/^[a-zA-Z ]+$/.test(field.value)){
            setValid(field);
            return true;
        }else{
            setInvalid(field, `${field.name} darf nur Buchstaben enthalten.`);
            return false;
        }
    }
}