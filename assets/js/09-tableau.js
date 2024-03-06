/*------------------------TABLEAU---------------------------*/


/* Un tableau (array) est un type de donnée qui peut contenir plujsieurs éléments , on peux creer un tableau en utilisant des crochets [] et en y inserant les éléments separés par des virgules */

const tableau =['Janvier' , 'Fevrier' , 'Mars' , 'Avril' , 'Mai' , 'Juin' ,'Juillet' , 'Aout' , 'Septembre' ,'Octobre' , 'Novembre' , 'Decembre' ];

console.log(tableau[0]);
console.log(tableau[11]);
console.log(tableau.length);

    
}
for (let i = 0; i < tableau.length; i++) {
    const element = tableau[i];
    console.log(element);
}