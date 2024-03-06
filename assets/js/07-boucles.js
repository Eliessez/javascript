/* Les boucles sont des structures permettant d'executer plusieurs fois des instructions */

/* La principale difference entre for et while : 
for et generalement utilise lorque le nombre d'iteration est connu a l'avance whule est utilisé lorquele nombre d'iteration est inconnu à l'avance et dépend d'une condition spécifique */

//boucle : for () {
// boucle for qui affiche les nombres de 10 a 20


// for (let i = 10; i <= 100; i=i+2) {
//     console.log(i);
//     }

//     let a = 10
 
    
//     // while (a<=20) {
//         console.log(a);
//         a = a+2
//         }

// Demander un nombre à l'utilisateur tant que ce nombre n'est pas le bon dites le nombre est plus grand ou le nombre est plus petit

let b = prompt('Give me a number bro')

while (b!=3457) {  
    if (b < 3457) {
       b = console.log("Le nombre est plus grand");
    }
        else if (b>"3457") {
           b = console.log("Le nombre est plus petit");
        }
    } 
    console.log("BRAVOOO");
    



// Ecrire un programme qui demande a l'utilisateur de saisir un nombre entier compris entre 1 et 10 

// Si la reponse n'est pas entre 1 et 10 afficher que le message devait etre compris entre 1 et 10 

// Le programme doit ensuite dessiner un sapin de noel compose d'etoiles 

// let response = prompt('Saisir un nombre entre 1 et 10 ');

// while (response < 1 || response > 10) {
//      response = prompt("Le message doit etre compris entre 1 et 10");