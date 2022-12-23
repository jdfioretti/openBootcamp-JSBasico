//Metodos de strings parte 3
//https://regexr.com

let texto_largo = "Tito no es un mono cualquiera. A Tito le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores, y recoger las nueces que se caen de los arboles"

//para buscar palabras dentro de la cadena
console.log(texto_largo.match(/no/g))

//para ver si la cadena contiene una palabra --> true o false
console.log(texto_largo.includes("prefiere"))
console.log(texto_largo.includes("terremoto"))

//Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"))
console.log(texto_largo.startsWith("Roberto"))

//Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("arboles"))
console.log(texto_largo.endsWith("plantas"))


