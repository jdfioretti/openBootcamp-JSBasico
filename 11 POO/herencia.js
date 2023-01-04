//Inheritance - Herencia
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludo() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

class Desarrollador extends Persona {       //extends para heredar la clase
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)     //con super heredamos el constructor
        this.lenguaje = lenguaje //agregamos el atributo faltante
    }
    saludo() {  //Override --> sobreescribe el saludo
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}
const nuevoDev = new Desarrollador("Javier", 51, "javascript")
console.log(nuevoDev)
nuevoDev.saludo()

//Polimorfismo => varias formas



