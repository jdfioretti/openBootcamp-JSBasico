class Persona {         //Crear clase
    nombre;             
    edad;               //atributos
    isDeveloper;
    constructor(nombre, edad, isDeveloper) { //--> metodo para declarar variables
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {          //metodo, que accede a los atributos
        //console.log("hola")
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)

    }
}

//Las variables dentro de una clase se llaman atributos
//Las funciones se llaman metodos
//El metodo constructor tiene los atributos que llevara el objeto, usando .this

const nueva_Persona = new Persona("Javier", 51, true)   //crear un nuevo objeto con Persona
console.log(nueva_Persona)

nueva_Persona.saludo()

//Instanciación: es una forma de inicializar una clase

let numero = 23 // inicializar
let nueva_Persona2 = new Persona("Maria", 34, true) // instanciar

// instanceof -> similar a typeof pero para clases

console.log(typeof numero)
console.log(nueva_Persona2 instanceof Persona)


