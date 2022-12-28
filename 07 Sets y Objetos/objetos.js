// Trabjando con Objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Perez",
    isDeveloper: true,
    libros_favoritos: ["El Metodo", "El codigo de la manifestacion"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id)
console.log(obj["4-juegos"]) //--> agrega corchetes auto

const prop = "isDeveloper"
console.log(obj[prop])

//Duplicar objetos --> se reemplazan en memoria, por lo tanto los cambios se ven en los dos obj

const obj2 = obj;
console.log(obj2)

obj2.nombre = "José";
console.log(obj2.nombre)

console.log(obj.nombre)

//Esto no sucede con elementos primitivos
let val = 4
let val1 = val

val2 = 6
console.log(val2)
console.log(val)

// La forma correcta de copiar objetos es usando spread

const obj3 = { ...obj }
console.log(obj3)

obj3.nombre = "Lucas"
console.log(obj.nombre)
console.log(obj3.nombre)

//// Como ordenar listas de objetos en funcion de una propiedad
const listaPeliculas = [
    { titulo: "Lo que el viento se llevo", anyo: 1939 },
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Moana", anyo: 2016 },
    { titulo: "El efecto mariposa", anyo: 2004 },
    { titulo: "Ted", anyo: 2012 }
]
console.log(listaPeliculas)

listaPeliculas.sort((a, b) => a.anyo < b.anyo)
console.log(listaPeliculas)







