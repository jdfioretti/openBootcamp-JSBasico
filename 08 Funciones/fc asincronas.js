// Funciones asincronas

function miAsinc() {
    //Hace una llamada a una base de datos externa
    //Puede darnos algun error
}

//Promesas

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    //Si es correcto
    if (i !== 0) {
        resolve()
    }
    else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("siempre me ejecuto"))
