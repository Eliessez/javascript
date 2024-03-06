// Un callback (fonction de rappel) est une fonction qui est passée en tant qu'argument dans une autre fonction

// fonction add
const add = function (x,y) {
    return x + y;
}
// fonction divide 
const divide = function (x,y){
    return x/y;
}

// fonction multiply
const multiply = function (){
    return x*y
}

function mathematique (x,y,callback){
    return callback(x,y);
}

const res = mathematique (12 , 89, function(s,t)r{
    return s*5+t*9.
})

// Une fonction peut prendre en parametre une fonction 
// Cela permet de rendre personnalisable 

function display(callback){
    callback()
}
const hello = function(){
    console.log('salut tout le monde ');
}

display (hello)
display (function()){}