//Metodos mas utilizados con strings
//Como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length)

//Obtener partes de un string
//slice() substring() substr()

let slice_str = str.slice(0, 10);
console.log(slice_str)

let substring_str = str.substring(0, 10);
console.log(substring_str)

let substr_str = str.substring(0, 10); // se esta deprecando
console.log(substr_str)

//Reemplazar parte del contenido de un string
let cadena = "Mi nombre es Javier";
console.log(cadena)

console.log(cadena.replace("Javier", "Lucas"))

let texto_largo = "Tito no es un monto cualquiera. A Tito le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores, y recoger las nueces que se caen de los arboles"

texto_largo.replace("los", "cinco") //solo cambiara la primera palabra que encuentre

console.log(texto_largo)

//Utilizamos la expresion regular /g(global) para reemplazar mas de una

console.log(texto_largo.replace(/los/g, 'cinco'));



