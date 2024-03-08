/*---------------EVENT---------------- */

/*
En javascript les evenements (events)permettent d'interagir avec les actions de l'utilisateur sur une page web , telles que le click , le scroll 
*/
const mainTitle = document.querySelector('#main-title')
mainTitle.addEventListener('click', function(){
    console.log('Hello,world');
})

const secondTitre = document.querySelector('.purple');

mainTitle.addEventListener('dblclick',function(){
    mainTitle.style.fontSize='50px'
})
mainTitle.addEventListener('click',function(){
    mainTitle.style.fontSize='10px'
})

const paragrapheContainer = document.querySelectorAll('p');
for (const p of paragrapheContainer ) {
paragrapheContainer[p];
    
}

paragrapheContainer.addEventListener('click', function(e) {
    e.target.style.color='red'
})
