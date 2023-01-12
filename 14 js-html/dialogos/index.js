
const boton = document.querySelector("#btn")

//console.log(boton)

boton.addEventListener("click", () => {
    //alert("Se ha hecho click")
    //confirm("Estas de acuerdo?") && console.log("OK") //si el 1° es true se ejecuta el 2°
    confirm("Estas de acuerdo?") //ternario: 1° true, pasa a 2°, sino a 3°
        ? console.log("OK")
        : console.log("No!")
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("Cual es tu nombre?")
    if (nombre) {
        console.log("Tu nombre es " + nombre)
    } else {
        console.log("No has introducido un nombre")
    }
})

const lista = [{
    nombre: "Javier",
    edad: 51
},
{
    nombre: "Lucas",
    edad: 8
},
{
    nombre: "Laura",
    edad: 45
}]

//console.log(lista)
console.table(lista)
