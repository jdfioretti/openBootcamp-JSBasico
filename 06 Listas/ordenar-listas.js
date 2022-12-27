//Ordenar listas .sort() --> modifica el array

const array = [2, 5, 7, 8, 10, 1, 0, 4]
console.log(array)

//Orenar de menor a mayor
array.sort((a, b) => {
    if (a < b) {
        return -1
    }
})
console.log(array)

//Orenar de mayor a menor
array.sort((a, b) => {
    if (a < b) {
        return +1
    } else if (a > b) {
        return -1
    } else {
        return 0
    }
})
console.log(array)

//Ordenar unicamente arrays numericos

const arrayNumerico = [2, 5, 1, 2, 4, 7, 89, 32, 145]

array.sort((a, b) => a - b)
console.log(arrayNumerico)

array.sort((a, b) => b - a)
console.log(arrayNumerico)

//Interesante en array de objetos
const listaObjetos = [
    { nombre: "Javier", edad: 50 },
    { nombre: "Laura", edad: 45 },
    { nombre: "Sofia", edad: 16 },
    { nombre: "Julian", edad: 12 },
    { nombre: "Lucas", edad: 8 }
]

/* listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1
    } else if (a.edad > b.edad) {
        return +1
    } else {
        return 0
    }
}) */
console.log(listaObjetos)

//La opcion sencilla
listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos)
