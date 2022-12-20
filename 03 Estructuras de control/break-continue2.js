//Break y continue
//Labels

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
    console.log(`El numero actual es: ${decenas}${unidades}`)
    bucleUnidades: while (true) {
        unidades++;
        if (unidades === 10) {
            unidades = 0;
            break bucleUnidades;
        }
        if (decenas == 2) {
            console.log(`El numero actual es: ${decenas}${unidades}`)
            break bucleDecenas;
        }
    }
    decenas++
}