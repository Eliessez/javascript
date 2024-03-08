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
    paragraphes[i].style.color = 'purple'
}

// getElementsByClassName HTML Collection
// cible la class
const classMere = document.getElementsByClassName('mere');
console.log(classMere);

for (let i = 0; i < classMere.length; i++) {
    classMere[i].style.backgroundColor = 'green'
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

for (let paragraphe of newParagraphes) {
    paragraphe.style.textDecoration = 'underline'
}

newParagraphes.forEach(function (paragraphe) {
    paragraphe.style.textTransform = 'solid'
})

// 
const txtUppercases = document.querySelectorAll('.txt-uppercase')

for (let txtUppercase of txtUppercases) {
    txtUppercase.style.textTransform = 'uppercase'
}

// Quelques propriétées liés au dom

//  La méthode 'classList.add() permet d'ajouter une classe a un element html
mainTitle.classList.add('txt-green')

// Cibler le p qui a la class txt-uppercase
//Enelever la class txt-uppercase
// La methode 'classList.remove'permet de supprimer une class
const upper = document.querySelector('#upper-test')
upper.classList.remove('txt-uppercase')

// Cibler le deuxieme h2
// Verifier s'il contient la class Title
//  la methode 'classList.contains' permet de demander sil contient une class
const secondTitle = document.querySelector('#title-h2')
const isTitle = secondTitle.classList.contains('title')
console.log(isTitle);

// Modifier le text => const.innerHtml
//Elle recupere le text et on peux le remplacer 
secondTitle.innerHTML = "Nous sommes sur un apprentissage"

// Modifier le texte => const.innertext
//Elle recupere le text et on peux le remplacer 

secondTitle.innerText = "Nous sommes debutant"
// textContent
//Elle recupere le text et on peux le remplacer 

secondTitle.textContent = "Nous sommes sur un apprentissage corcé"

// La methode 'setAttribute ()' ("attribut , valeur de l'attribut")
// Donner un attribut (title , href , src ...)
cssProperties.setAttribute("Title", "je suis une pop up")

// La methode .title
const attribut = document.querySelector('#lastParagraphe')
attribut.title = 'Je suis une popcorn'

/*------------CREER DES ELEMENTS------------- */

const newParagraphe = document.createElement('p')
newParagraphe.classList.add('new-paragraphe')
newParagraphe.textContent = 'je suis un nouvel element cree en js'

const paragrapheContainer = document.querySelector('#paragraphe-container')
console.log(paragrapheContainer);
paragrapheContainer.prepend(newParagraphe) /* prepend = dans la div au debut*/
// paragrapheContainer.append(newParagraphe)(append = dans la div a la fin)
    