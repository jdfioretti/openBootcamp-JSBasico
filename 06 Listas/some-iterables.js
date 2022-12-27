// Comparar si contienen algunos elementos .some()

const array = [2, 56, 23, 67, 64, 1000, -10, 128]

const res = array.some(valor => valor < 0)
console.log(res)

const existe = array.some(valor => valor === 2)
console.log(existe)

const listaObjetos = [
    { nombre: "Javier", edad: 50 },
    { nombre: "Laura", edad: 45 },
    { nombre: "Sofia", edad: 16 },
    { nombre: "Julian", edad: 12 },
    { nombre: "Lucas", edad: 8 }
]

const existePersona = listaObjetos.some(persona => persona.nombre === "Javier")
console.log(existePersona)

//Como obtener una lista a partir de un objeto iterable

const str = "Hola soy Javier"
console.log(str[7])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, 5, 7, "hola"])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)

