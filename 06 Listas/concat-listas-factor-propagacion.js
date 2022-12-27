// Como unir dos listas .concat(lista2)

let lista1 = ["hola", 2, false, null]
let lista2 = ["Adios", 1, true, undefined]

console.log(lista1.concat(lista2))

const lista3 = lista1.concat(lista2);
console.log(lista3)

//Unir dos listas con el factor de propagacion
console.log(...lista3)

const lista4 = [...lista1, ...lista2];
console.log(lista4)

//ERROR! ojo, esto es diferente y no arroja error --> nos da dos listas dentro de otra
const lista5 = [lista1, lista2];
console.log(lista5)

