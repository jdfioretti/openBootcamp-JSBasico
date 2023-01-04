const persona = {
    nombre: "Javier",
    edad: 51
}
console.log(persona)

function getDobleEdad(edad) {
    return 2 * edad
}

const dobleEdad = getDobleEdad(persona.edad)

console.log(dobleEdad)

function getArray(edad) {
    let arrayNums = []

    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}
const array = getArray(persona.edad)

console.log(array)