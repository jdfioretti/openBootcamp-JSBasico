//Trabajar con metodos mas avanzados
// . map() .filter(). reduce()

const array = ["San Sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"]

array.forEach(v => {
    console.log(v)
})

/* const newArray = array.map((valor, indice) => {
    return `${indice +1}-${valor}`
})
console.log(newArray) */

//Más eficiente
const newArray = array.map((valor, indice) => `${indice + 1}-${valor}`)
console.log(newArray)

const listaObjetos = [
    { nombre: "Javier", edad: 50 },
    { nombre: "Laura", edad: 45 },
    { nombre: "Sofia", edad: 16 },
    { nombre: "Julian", edad: 12 },
    { nombre: "Lucas", edad: 8 }
]

/* const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad > 30) {
        return true;
    } else {
        return false
    }
}) */

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Javier")
console.log(nuevaLista)

//Reduce sirve para obtener un valor/elemento/algo a partir de una lista

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)
