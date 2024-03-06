/* -------------------------OBJET---------------*/

/* Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble*/

const person = {
    firstName : 'ELIESSE',
    lastName : 'ZINE',
    age : 30 ,
    formation : ['algorithmique' ,'html' ,'git', 'javascript'],
    job : {
        name : 'formateur',
        hour : 35,
    },
    getIdentify: function(){
        return 'je m\'appelle ELIESSE ZINE'

    }
}
// Acceder au proprété d'un objet
console.log(person.job.name);

// creer un objet 

const car = {
    model : 'Audi',
    year : 2022,
    color : 'black',
    options : ['siège chauffant','vitre éléctrique',],
    motors : {
        cylindre : 8,
        chevaux : 600,
    },
    description: function() {
        return `Je suis une ${this.model} sortie en ${this.year}`
    },
};
// afficher le model de l'objet car 
console.log(car.model);
// afficher la deuxieme options  
console.log(car.options[1]);
// afficher la description
console.log(car.description());  

// On peut egalement acceder a une propriete d'un objet grace au crochetet a sa cle en guise de valeur 
console.log(car['model']);  

for(let key in car){
    console.log(car[key]);
}