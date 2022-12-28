//Crea un archivo llamado fechas.js que contenga las siguientes líneas
//- La fecha de hoy
let fecha = new Date()
console.log(fecha)

//- La fecha de tu nacimiento
let fechaNac = new Date(1971, 1, 23)
console.log(fechaNac)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let comparar = fecha > fechaNac;
console.log(comparar)

//- Una variable que contenga el día de tu nacimiento
let diaNac = fechaNac.getDay()
console.log(diaNac)

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNac = fechaNac.getMonth() +1;
console.log(mesNac)

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anyoNac = fechaNac.getFullYear();
console.log(anyoNac)
