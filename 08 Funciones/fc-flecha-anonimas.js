//Funciones tipo flecha - funciones anonimas

const array = [1, 2, 5, 6, 8, 23, 56]
/* 
const array2 = array.map(function (valor) {
    return valor * 2
}) */

//arrow function
const array2 = array.map((valor) => valor * 2) //funcion anonima
console.log(array2)

/* const dobleVAlor = valor => {
    return valor * 2;
}
 */

const dobleVAlor = valor => valor * 2;

console.log(dobleVAlor)
const array3 = array.map(dobleVAlor)
console.log(array3)


//OJO con el hoisting
// las arrow se pueden llamar luego de ser inicializarlas



