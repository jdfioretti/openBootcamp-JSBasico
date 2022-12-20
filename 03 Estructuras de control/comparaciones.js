//Comparaciones

//Igualdad

let a = 5;
console.log(typeof a)
let b = 5;
console.log(typeof b)
let c = "5";
console.log(typeof c)

// == compara valores
// === compara valores y tipos

if (a == b) {
    console.log("son iguales - Debil")
}

if (a === c) {
    console.log("son iguales - Fuerte")
}

//Desigualdad

//!= compara valor
//!== compara valor y tipo

let d = 4;
let e = 10;

if (d != e) {
    console.log("d es diferente de e - Debil")
}

if (d !== e) {
    console.log("d es diferente de e - Fuerte")
}

//Mayores y menores

let max  = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min")
}
if (max >= min) {
    console.log("max es mayor o igual que min")
}

if (min < max) {
    console.log("min es menor que max")
}
if (min <= max) {
    console.log("min es menor o igual que max")
}
