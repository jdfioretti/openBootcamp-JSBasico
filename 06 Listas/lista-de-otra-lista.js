//Como obtener una lista a partir de otra .slice()
//NO modifica el valor del array

const array = ["hola", 6, 7, 8,true, null, "adios"]
console.log(array.slice(1, 4)) //--> comienza primer indice, hasta el otro(no incluido)

const array2 = array.slice(1, 5);
console.log(array2)

const array3 = array.slice(1, -2); //--> podemos poner el 2do indice negativo
console.log(array3)

