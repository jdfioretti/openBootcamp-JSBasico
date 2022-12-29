// Funciones, como se declaran y como se utilizan
// Son bloques de codigo que se hacen con un fin especifico

/* saludar()

function saludar() {
    console.log("Hola")
} */

saludar("Javier")

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

/////
let nombre_2 = "Juan";
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adios ${nombre}`)
}

////
let persona = { nombre: "Juan", apellido: "Gonzalez" }
console.log(persona)

saludarPersona(persona)

function saludarPersona(objeto) {
    objeto.apellido = "Fioretti" // si cambiamos el objeto dentro de la fc
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludar() //--> daria undefined

////

/* function imprimeNumero(numero){
    console.log(numero) --> undifined
    }
imprimeNumero() */

//// por defecto --> si no tiene arg coloca 7, sino el arg
function imprimeNumero(numero = 7) {
    console.log(numero)
}
imprimeNumero(9)

////
function imprimir(...parametros) {
    console.log(parametros)
}
imprimir(1, 2, 3, "hola", { a: 1, b: 2 })

////
function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 56)
console.log(s)

////Ambito de una funcion

let variable = "hola" //variable declarada fuera de la fc

function multiplicar(a = 0, b = 0) {
    console.log(variable)//--> podemos llamarla desde dentro de la fc
    let varInterna = "adios"
    console.log(varInterna)// dentro del ambito podemos llamarla
    return a * b;
}

//console.log(varInterna)// --> por fuera da error
console.log(multiplicar(4, 9))