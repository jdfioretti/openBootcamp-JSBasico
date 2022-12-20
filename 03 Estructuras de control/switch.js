// Sentencias Switch

let nota = 5;

switch (nota) {
    case 5:
        console.log("Felcitaciones, has obtenido sobresaliente")
        break; //--> se usa para que no entre en todos
    case 4:
        console.log("Buen trabajo, pero podrias mejorar")
        break;
    case 3:
        console.log("Has obtenido un suficiente")
        break;
    case 2:
        console.log("No has aprobado por poco")
        break;
    case 1:
        console.log("No has estudiado nada, necesitas trabajar mas")
        break;
    default: // --> caso por defecto, por si no hay opciones - buena practica
    console.log("Error")
    break;
}
