class Persona {
    //Private -> # Solo se puede acceder desde dentro
    #nombre
    #edad
    //#obtenEdad

    //Protected --> _
    //Solo se puede acceder desde dentro y clases descendientes
    _isDeveloper = true
    constructor(nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
    }
    saludo() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }

    obtenNombre() { //--> fc getter: nos permite acceder de forma controlada a un atributo privado
        return this.#nombre
    }
    /* #obtenEdad(){
        return this.#edad
    } */

    getEdad() {
        return this.#edad
    }
    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
}

const persona = new Persona("Javier", 51)
console.log(persona)
console.log(persona.nombre) //para acceder a un atributo
persona.saludo()            //para acceder a un metodo

//Private -> # Para proteger los atributos y que solo se pueda acceder desde dentro de la clase

console.log(persona.obtenNombre())

//Getter -> metodos que nos permiten obtener atributos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

//Setter -> metodos que nos permiten cambiar los valores de los atributos privados
//Cambiar la edad de persona
persona.setEdad(25)
console.log(persona.getEdad())


