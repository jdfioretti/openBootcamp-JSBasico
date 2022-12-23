// Crear cadenas, con nombre y con apellido
let cad = "Javier";
let cad2 = "Fioretti";

//Concatenar cadenas
let estudiante = cad.concat(" " + cad2)
console.log(estudiante)

//Pasar a mayusculas y minusculas
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMayus)
console.log(estudianteMinus)

//Numero de caracteres 
let numcadena = estudiante.length;
console.log(numcadena)

//Primera letra del nombre
let primeraLetra = cad.charAt(0);
console.log(primeraLetra)

//Ultima letra del apellido
let ultimaLetra = cad2.charAt(cad2.length-1);
console.log(ultimaLetra)

//Quitar espacios
let sinEspacios = estudiante.replace(" ", "");
console.log(sinEspacios)

//Palabras incluidas, o no
let contienePalabra = estudiante.includes("Javier");
console.log(contienePalabra)

let contienePalabra2 = estudiante.includes("Roberto");
console.log(contienePalabra2)