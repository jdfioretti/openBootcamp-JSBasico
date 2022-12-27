//Comparar listas
// .every() --> si todos....

const array = [4, 6, 7, -1, 78, 56, 23, -21, 12, 45]

/* const resultado = array.every(valor => {
    if (typeof valor === "number") {
        return true
    } else {
        return false
    }
}) */
//Cada valor es un numero --> true

/* const resultado = array.every(valor => {
    if (valor > 0) {
        return true
    } else {
        return false
    }
}) */
//No todos son positivos --> false

//La buena practica
const resultado = array.every(valor => valor > 0)
console.log(resultado)

//Comparar listas

const lista1 = [1, 2, 3, 4]
const lista2 = [1, 2, 3, 4]

//No se compara de esta manera
console.log(lista1 === lista2)

const comparArrays = (lista1, lista2) => {
    if (lista1.length !== lista2.length) return false
    const res = lista1.every((valor, i) => valor === lista2[i])
    return res;
}
console.log(comparArrays(lista1, lista2))

const lista3 = [1,2,3,5]
console.log(comparArrays(lista1, lista3))



