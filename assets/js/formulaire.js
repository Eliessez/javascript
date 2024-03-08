const inputContainer = document.querySelector('.input-container');
const submit = document.querySelector('.submit');

inputContainer.addEventListener('click',function() {
    if (inputContainer.value != '') {
        const elementError= document.createElement('p');
        elementError.textContent= 'le champ est vide'
    }
    
})









submit.addEventListener('click',function (e) {
    e.preventDefault()
    console.log(submit);
})