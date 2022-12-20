//Bucles --> for - while - ambitos del bucle

//for(inicializacion(gral. contador), condicion(mientras se cumpla), actualizacion(al final realiza esta operacion) ){
    //contenido bucle
//}

for(let i = 0; i < 10; i++) {
    console.log(i)
}

let lista = [8, 1, 3, 5, 7, 4, 10, 12];

//podemos recorrer la lista, y solicitar el indice mas la operacion que queramos
for(let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

// for ... of --> similar al anterior, mas especifico

for(let valor of lista ){
    console.log(valor)
}

//forEach --> similar a las anteriores, pero con arrow fc. Mas eficiente

lista.forEach(valor => {
    console.log(valor)
})

//for in --> podemos recorrer un objeto con esta estructura

let persona = {
    nombre: "Javier",
    apellido:"Fioretti",
    edad: 51,
    isDeveloper: true
}

for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])

}