class Estudiante {
    nombre;
    asignatura = [ "Javascript", "HTML", "CSS" ];
    constructor(nombre, asignatura) {
        this.nombre = nombre
        this.asignatura = [ "Javascript", "HTML", "CSS" ]
    }
    obtenDatos() {
        const asignaturas = {
            nombre: this.nombre,
            asignatura: this.asignatura
        }
        return asignaturas
    }
}

let nuevoEstudiante = new Estudiante("Javier", "Javascript")
console.log(nuevoEstudiante.obtenDatos())