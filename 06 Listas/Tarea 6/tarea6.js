//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let pedido = ["leche", "pan", "huevos", "queso", "mayonesa", "vino"]
console.log(pedido)
//Modifica la lista de la compra y añádele "Aceite de Girasol"//
pedido.push("Aceite de Girasol");
console.log(pedido)

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol//
pedido.pop()
console.log(pedido)

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha//
let peliculas = [
    {
        titulo: "El Señor de los Anillos",
        director: "Peter Jackson",
        fecha: 2001
    },
    {
        titulo: "Terminator 2",
        director: "James Cameron",
        fecha: 1991
    },
    {
        titulo: "John Wick",
        director: "Chad Stahelski",
        fecha: 2014
    }
]
//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter//
let peliculasNuevas = peliculas.filter(obj => obj.fecha > 2010)
console.log(peliculasNuevas)

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map//
let directores = peliculas.map((item) => item.director)
console.log(directores)

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map//
let titulos = peliculas.map((item) => item.titulo)
console.log(titulos)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat//
let concatenados = directores.concat(titulos)
console.log(concatenados)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let concatPropagacion = [...directores, ...titulos]
console.log(concatenados)