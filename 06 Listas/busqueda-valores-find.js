//Iterar los valores de una lista

//Forma antigua, y no tan eficiente
const array = ["hola", 2, 5, 7, 90, null, undefined]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

//Forma ES6 eficiente .forEach()
array.forEach(valor => {
    console.log(valor)
})

//Ej suma
let suma = 0;
const sumaNum = [2, 4, 6, 8, 12, 16, 32, 64]
sumaNum.forEach(valor => {
    suma += valor;
})
console.log(suma)

//Busqueda de un valor dentro de una lista .find()
//Encotrar el valor 90
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})
console.log(variable)

//Tiene mas sentido en objetos

const listaObjetos = [
    { nombre: "Javier", edad: 50 },
    { nombre: "Laura", edad: 45 },
    { nombre: "Sofia", edad: 16 },
    { nombre: "Julian", edad: 12 },
    { nombre: "Lucas", edad: 8 }
]

/* const objeto = listaObjetos.find(o => {
    if (o.nombre === "Sofia") {
        return true
    }
})
console.log(objeto.edad) */

//Otra opcion
/* const objeto = listaObjetos.find(o => {
    return o.nombre === "Sofia"
})
console.log(objeto.edad) */

//Menos codigo usando arrow function
const objeto = listaObjetos.find(o => o.nombre === "Sofia")
console.log(objeto.edad)

//Y mas eficiente aun
const { edad } = listaObjetos.find(o => o.nombre === "Julian")
console.log(edad)

