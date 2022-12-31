//Modulo: parte del codigo que se puede reutilizar

//Formas de importar/exportar modulos
//1. Common JS - require
//2. Import ES6 - import

//const moduloMates = require('./modulo/matematicas')
//const factorial = moduloMates.factorial;
//otra forma
//const { factorial, suma } = moduloMates;

//Una forma mejor aun
const { factorial, suma } = require('./modulo/matematicas')


//console.log(moduloMates)

const fact = factorial(5);
const sum = suma(12, 90)



//const fact = moduloMates.factorial(5);
console.log(fact)

//const sum = moduloMates.suma(12, 90)
console.log(sum)

//console.log(module)