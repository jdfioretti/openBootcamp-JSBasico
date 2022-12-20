//Variables

var variable;
let variableLet_;

//const constante;
const constante = "hola soy una constante"

console.log(constante)
// constante = "Adios" --> daria error

var a = 1;
console.log(a)

a = 4;
console.log(a)

let b = 3;
console.log(b)

b = 5;
console.log(b)


// Diferencias VAR y LET

var variable = "Soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variable = "Soy una segunda variable"
}
console.log(variable)

//////////////////


let variableLet = "Soy una variable LET"

for (var i = 0; i < 3; i++) {
    let variableLet = "Soy una segunda variable"
}
console.log(variableLet)

////////Typeof///////////

var num = 4;
console.log(typeof num)

num = "Hola";
console.log(typeof num)

//No es buena practica cambiar el tipo de una variable.
