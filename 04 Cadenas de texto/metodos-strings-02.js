//Metodos de strings parte 2

let input = "Escorpio";
let db = "escorpio";

console.log(input === db)

// toLowerCase() - toUpperCase()

console.log(input.toLowerCase())
console.log(input.toUpperCase())

console.log(input.toLowerCase() === db.toLowerCase())

//Formas de concatenar cadenas

let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(str_2))
console.log(str_1 + str_2)//ojo con los numeros
console.log(`${str_1} ${str_2}`)

//Eliminar espacios en una cadena

let str_3 = "    hola soy un string con espacios.    "
console.log(str_3.length)
//trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//Obtener un caracter en cierta posicion de la cadena

let str_4 = "Hola soy el string numero 4"
//puede tratarse como una lista --> ["H", "o", "l", "a", " ", "s" ......]

console.log(str_4.charAt(5))
console.log(str_4[5])

//Obtener la posicion de una palabra dentro de una cadena
let str_5 = "Hola soy Javier y me gusta codear. Mi nombre es Javier"

console.log(str_5.indexOf("Javier"))// nos dara la posicion de la primera letra
//Si hay mas de una palabra, nos devolvera la primera
console.log(str_5.indexOf("Jabier"))// si no la encuentra, nos dara un -1
console.log(str_5.charAt(9))
//Si queremos la ultima
console.log(str_5.lastIndexOf("Javier"))



