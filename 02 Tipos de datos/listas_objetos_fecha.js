//Listas, array o arreglo -->conjunto de variables en orden
const lista = [1, "hola", true, undefined, null]
const lista2 = new Array(1, "hola", true, undefined, null)//se puede poner cantidad de elementos, o los elementos directa/
const lista3 = new Array(3)
lista3[0] = "Primer elemento, index 0"
const lista4 = [lista, lista2, lista3] // lista de listas

console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)

//Objetos --> lenguaje orientado a objetos. Representa objetos de la vida real
const movil = {
    altura: 10,
    anchura: 5,
    marca: "xiamoi",
    isWhite: false,
    contactos: ["Sofi", "Juli", "Lucas"],
    tarjeta: {
        marca: "Kingston",
        capacidad: 32
    },
    "altura-tarjeta": 4  //--> otra forma de agregar un atributo
}

//Para agregar atributos:
movil.anyo = 2021;

console.log(movil.anyo)

//Para cambiar un atributo:
movil.marca = "Samsung";

console.log(movil.marca)

//Para acceder a los datos nombre de objeto."argumento"."otro_argumento" si lo hubiera
console.log(movil.contactos)
console.log(movil.tarjeta)
console.log(movil.tarjeta.marca)

//Fechas
//Hay librerias de apoyo: Moment.js

const ahora = new Date(); //nos da la fecha del momento
console.log(ahora)

const fecha_milis = new Date(10); // nos da la fecha con milisegundos, comenzando en ene-1970
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 0, 15); //ojo mes, comienza en 0, como las listas
console.log(fecha_valores)

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo)


