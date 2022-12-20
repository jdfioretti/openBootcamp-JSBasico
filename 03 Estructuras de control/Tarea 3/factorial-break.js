//Factorial de 10 con bucle while con break

let factorial = 1;
let i = 2;

while (i <= 10) {
    factorial = factorial * i
    i++
    if (i === 11) {
        break;
    }
}

console.log(factorial)
