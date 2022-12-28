//Fechas

const fecha = new Date()
console.log(fecha)

//Atencion - los meses inicializan en 0 hasta 11 (0 enero, 11 diciembre)
//podemos poner la fecha que queramos
const fecha2 = new Date(1971, 1, 23, 12, 05)
console.log(fecha2)

console.log(fecha2.getTime())

//Inicia el 1-1-1970 a las 00:00 --> pero otro uso horario
const fecha3 = new Date(0) //la propiedad son milisegundos, pueden ser negativos. Parten de la fecha inicial
console.log(fecha3)

//Podemos usar strings

const fecha4 = new Date("Febreary, 23, 1971, 12:05")
console.log(fecha4)

//Comparacion de fechas
console.log(fecha > fecha2)

//La igualdad se compara usando .getTime()
const fecha5 = new Date(1971, 1, 23, 12, 05)
console.log(fecha5.getTime())

console.log(fecha === fecha5) //ERROR

console.log(fecha.getTime() === fecha5.getTime())

//Como obtener dia, mes y año de una fecha
//Dia .getDate()
console.log(fecha2.getDate())

//Mes - .getMonth() (enero = 0) + 1
console.log(fecha2.getMonth() + 1)

//Año .getFullYear()
console.log(fecha2.getFullYear())

// Para devolver la fecha en srting
// .toLocalDateString()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("es-AR"))
console.log(fecha2.toLocaleDateString("en-US"))







