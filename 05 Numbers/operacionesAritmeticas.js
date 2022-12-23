//Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

//Suma
console.log(a + b)

//Resta
console.log(a - b)

//Multiplicacion
console.log(a * b)

//Division
console.log(a / b)

//Representacion de los numeros en cadenas de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

//Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d)
// toFixed(x) limita el numero de decimales al valor x
console.log(d.toFixed(1))//argumentos, cantidad de decimales
console.log(typeof d.toFixed(1))// Cuidad que les cambia el tipo
//Puedo tomar enteros y que nos pase con decimales
let e = 1839.12345679
console.log(e.toFixed(2))
let f = 221345678912;
console.log(f.toFixed(2))

//toPrecision(x) Limita el numero de cifras significativas
console.log(e.toPrecision(5))
console.log(f.toPrecision(5))//numero significativo(5) elevado a la 11

console.log(typeof f.toPrecision(7))//tambien nos devuleve un string





