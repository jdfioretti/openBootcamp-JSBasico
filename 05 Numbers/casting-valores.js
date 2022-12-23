//Operador valueOf() - Obtener valores numericos a partir de literales

let a = 2;
let b = new Number(3); //--> castear

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());// esto lo hace internamente

console.log(b.valueOf())

//Tambien puede ser con strings

let str = new String("Hola soy un string");
console.log(str) //lo castea
console.log(str.valueOf()) 

//NaN (Not a Number) - Infinity
let n = Number("Adios");
console.log(n)
console.log(isNaN(n))

let numerador = 19;
let divisor = 0;
//un numero dividido en 0 es Infinity
console.log(numerador / divisor)

let divisor2 = null;
console.log(numerador / divisor2)

//Como convertir los strings a valores numericos con Number, parseInt, parseFloat

let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); //error de concepto - concatena num+str

console.log(Number(numero) + num2); 

console.log(parseInt(numero))   //enteros
console.log(parseFloat(numero)) //decimales

let num3 = 4;
console.log(parseInt(num3))   
console.log(parseFloat(num3)) 

//Numeros Hexadecimales (base 16)

let numHex = '0x3a5b7'; //--> los hexad son solo enteros
console.log(parseInt(numHex))
console.log(parseInt(numHex, 8)) // se puede agregar la base (8, 10, 16)

//Obtener valores maximos y minimos en JS

let min_precision = Number.EPSILON; //es el minimo de diferencia entre numeros
let min_valor_JS = Number.MIN_VALUE; //valor minimo que se puede obtener en JS
let max_valor_JS = Number.MAX_VALUE; //valor maximo que se puede obtener en JS

console.log(min_precision)
console.log(min_valor_JS)
console.log(max_valor_JS)

console.log(2 ** 1024)
console.log(2 ** 1023)















