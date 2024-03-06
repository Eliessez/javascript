/* Une fonction est un bloc de code reutilisable qui peux etre appelé à a partir d'autres parties de votre code pour effectuer une tache spécifique .Les fonctions sont un moyen utile de segmenter votre code en taches plus petites et plus facile à gerer .Ell permettent de reutiliser le meme code plusieurs fois sans avoir a le copier coller .
*/

// Déclaration de fonction

function hello(lastname, firstname) {

    console.log('Bonjour' + firstname +''+ lastname);
}
hello('Shelby','Thommy')

// Déclarer une fonction qui prend 3 parametres    
// 

function mul(x , y , z) {
    let tva = 0.20
    let result = (x*y*z)*tva
    return result
}
const resultat = mul(12,34,56) /*On a placer le resultat dans une constance pour l'utiliser en dehors*/
console.log(resultat );


// Il est possible de sauvegarder une fonction dans une variable 
// On les appelle foonctions anonyme 
const math = function(x,y) {
    return x*y
}
const res = math(12,89);
console.log(res);

// Fonction addition 
const addition = function (x,y){

    return x+y
}
const toto = addition(12,34)

// Arrow function ( fonction fléché)
const divide = (x,y)=> {
    return x/y;
}
// Il existe des facons encore plus concise d'ecrire les fonctions fléchées
const arrow = x => x*2;
const r = arrow (45);

// Creer une fonction fléché helloYou avec un parametre qui affiche bonjour + prenom

const helloYou = (blaze)=>{
    const message = `Bonjour , ${blaze}`
    return message;
}
helloYou('ELIESSE')

let mcFly = prompt("Rentre un nombre")
const pair = function(x) {
    if (mcFly%2==0) {
        console.log('Le nombre est pair');
     }
     else 
     console.log('Le nombre est impair');
     
}
const op = pair(5)





