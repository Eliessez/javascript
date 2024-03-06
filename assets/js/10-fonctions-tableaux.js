/*----------------------FONCTIONS SUR LES TABLEAUX------------------------- */

// Creer un tableau d'animaux ()

const animals = ['chat','chien','tigre','lion','requin','panda']
console.log(animals);

// Ajoute un ou plusieurs elements a la fin d'un tableau
animals.push('dauphin','loup')
console.log(animals);

// Supprime le dernier element du tableau
animals.pop()
console.log(animals);

// Ajouter un ou pluieurs éléments au debut du tableau
animals.unshift('hiboux');
console.log(animals);

// Supprimer le premier element d'un tableau
animals.shift()
console.log(animals);

// Reorganise le tableau de la fin vers le debut
animals.reverse()
console.log(animals);

// Ajouter un raton laveur en deuxieme case (1)
//(indice de la case |supprimer a partir |element qu'on ajoute)
animals.splice(1,0,'raton laveur')
console.log(animals);

// modifier un chien en aigle
animals.splice (6,1,'aigle')
console.log(animals);

// 

const city = ['Paris','Berlin','Rome','Moscou','Londres','Madrid']

function capital(array) {
array.pop();
array.unshift('Vienne');
array.splice(3,1,'Alger');
 return array.length;
}

capital(city);
console.log(city);  