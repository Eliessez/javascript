/*-----------------Manipulation du DOM--------------- */

/* Le DOM (Ducument Object Model) en Javascript est une représentation en mémoire d'un document en HTML chargé par le navigateur 
Le DOM représente chaque élément du document comme un objet en Javascript qui peut etre manipulé et modifié à travers le  code Javascript*/


/*------------Methode de selecteurs Javascript----------------*/

//ciblé un element par un id
//getElementById
const mainTitle = document.getElementById('main-title');
console.log(mainTitle);
mainTitle.style.fontFamily = 'Arial'

//ciblé un element par sa balise  
// HTML Collection
// getElementsByTagname

const paragraphes = document.getElementsByTagName('p');
console.log(paragraphes)

for (let i = 0; i < paragraphes.length; i++) {
    paragraphes[i].style.color ='purple'
}

// getElementsByClassName
// cible la class
const classMere = document.getElementsByClassName('mere');
console.log(classMere);

for (let i = 0 ;i <classMere.length ; i++){
    classMere[i].style.backgroundColor ='green'
}

// La methode querySelector
// Cible tout a partir du moment ou dans la parenthese (# , . , p , h1...) seulement le premier element
const cssProperties = document.querySelector('.paragraphe')
console.log(cssProperties);
cssProperties.style.fontSize = '10px'

// Methode querySelectorAll
//NodeList

const newParagraphes = document.querySelectorAll('p')
console.log(newParagraphes);

for(let paragraphe of newParagraphes){
    paragraphe.style.textDecoration = 'underline'
}

newParagraphes.forEach(function(paragraphe){
    paragraphe.style.textTransform = 'solid'
})
