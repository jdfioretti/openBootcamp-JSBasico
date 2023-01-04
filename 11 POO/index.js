const persona = {
    nombre: "Javier",
    edad: 51,
    isDeveloper: true,
    saludo: function () {
        console.log("hola")
    }
}
//console.log(persona)    
persona.saludo()

const otra_persona = {
    nombre: "Laura",
    edad: 45,
    isDeveloper: false,
    saludo: function () {
        console.log("Hola")
    }
}

//Factory function --> para no repetir codigo

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // es igual que nombre: nombre,
        edad,
        isDeveloper,
        saludo: function () {
            console.log("Hello")
        }
    }
}

//Usando esta fc podemos crear todas las personas que queramos

const otra_persona2 = creaPersona("Sofia", 16, false)
console.log(otra_persona2)

const nueva_persona = creaPersona("Julian", 12, false)
console.log(nueva_persona)
