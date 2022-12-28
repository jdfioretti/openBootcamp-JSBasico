//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

let objetoYo = [{
    nombre: "Javier",
    apellido: "Fioretti",
    edad: 51,
    altura: 165,
    isDevelper: true
}]
//- Una variable que obtenga tu edad a partir del objeto anterior

let edad = objetoYo.edad;
console.log(edad)

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

let listaObjeto = Object.values(objetoYo);
console.log(listaObjeto)

let objetoAmigos = [
    {
        nombre: "Hernan",
        apellido: "Guaragna",
        edad: 37,
        altura: 175,
        isDevelper: true
    },
    {
        nombre: "Bruno",
        apellido: "Mele",
        edad: 31,
        altura: 180,
        isDevelper: true
    }
]
objetoYo.objetoAmigos = objetoAmigos;
console.log(objetoYo)

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

objetoYo.sort((a, b) => a.edad < b.edad)
console.log(objetoYo)
