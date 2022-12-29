//Crea un archivo JS que contenga las siguientes líneas
//- Una función sin parámetros que devuelva siempre "true"

function sinParam() {
    return true;
}
console.log(sinParam())

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 
// 5 segundos después de haberse ejecutado
function saludar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hola soy una promesa");
            resolve();
        }, 5000);
    });
}
saludar().then(() => {
    console.log("funciona!")
});

//- Una función generadora de índices pares automáticos

function* generarPares() {
    let indice = 0;
    while (true) {
        yield indice;
        indice += 2;
        if (indice === 10) {
            return indice;
        }
    }
}

const gen = generarPares();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

