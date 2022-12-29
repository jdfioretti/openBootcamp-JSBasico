//Chequear errores a la forma antigua

const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val;
    } else {
        //return false;
        throw new Error("el valor debe ser de tipo numero")
    }
}

//const doble = miFuncion("a10")
const numero = 8;

try {
    //codigo que puede fallar
    console.log("Se esta ejecutando normalmente")
    const doble = miFuncion(numero)
    console.log(doble)

} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es ${e}`)
    console.log("ERROR!")
} //finalmente podemos agregar:
finally {
    ("Esto se ejecutara no importa que pase antes")
}

//Errores mas comunes
//InternalError--> cuando hay overflow 
//SyntaxError-->  cada vez que hay algo mas escrito el codigo
//TypeError--> error de tipo, ej:pasar un numero en vez de un boolean
//RangeError--> cuando intentamos acceder a un dato fuera de un rango dado
//ReferenceError --> cuando no existe la referencia que buscamos

//developer.mozilla.org/es/docs/web/javascript/reference/global_object/error











