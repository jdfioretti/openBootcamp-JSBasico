//Bucle while y do while

//while(condicion){ mientras se cumpla la condicion se ejecuta
//bucle } --> ojo con los bucles infinitos

let i = 0;
let max = 10;

while (i < max) {
    console.log(i);
    i++;
}

//do while --> se ejecuta por lo menos una vez

/* do {

} while(condcion) */

i = 0;
do {
    i++;
} while (i < max)

// si o si se ejecuta una vez, y luego sigue si la condicion se cumple
i = 15;
do {
    console.log("Estoy en el do while")
} while (i < max)
