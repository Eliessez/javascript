// Les operateurs de comparaison 
// (== , === , !== , > , >= , < , <=)
// Declarer une constante condition vous lui donnez en valeur un nombre 

// Verifier si ce nombre est superieur ou egal a 18 si c'est le cas affichez vous etes majeur 

const condition = 65

if (condition >= 18) {
    console.log('Vous etes majeur');
}

// Declarer une variable qui contient un nombre 

let number = prompt('donne moi un nombre ')

if (number % 3 ==0 && number % 5 ==0) {
    alert('Fizzbuzz');
}
else if (number %3 == 0) {
    alert('Fizz');
}else if (number %5 == 0) {
    alert('buzz')
}
else 
    alerte (number);
    
// Demander un nombre 12
response = prompt('give me a number')
console.log(typeof response) /* demander le type */


let animals = prompt('Quel est ton animal preferer ?')
if (animals == 'dog') {
    console.log('Vous etes quelqun de bien');
}
else if (animals == 'cat') {
    console.log('Vous etes chelou');
}else if (animals == 'poisson') {
    console.log('drole de choix');
}
else {
console.log("Je n\'ai pas compris la reponse") ;
}

// Methode switch pour une condition if

switch (animals) {
    case 'dog':
        console.log('Vous etes quelqun de bien');
        break;
    case 'cat':
    console.log('Vous etes chelou');
        break;
    case 'poisson':
        console.log('drole de choix');
        break;
    default:
        console.log("Je n'ai pas compris la reponse"); 
}