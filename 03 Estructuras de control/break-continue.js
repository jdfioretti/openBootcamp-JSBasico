//Casos especificos break y continue
// son casos excepcionales, no son buenas practicas
// si el codigo esta OK, no harian falta

let lista = [1,2,3,4,5,6,7,8];

for(let i = 0; i < lista.length; i++){
    
    if(lista[i] === 3) {
        continue;       //chequea la condicion y vuelve al bucle
    }

    console.log(lista[i])

    if(lista[i] > 5){
        break; // corta el bucle cuando se cumple esta condicion
    }
}

//ambito de un bucle --> alcance del bucle

//si estan declaradas con let, solo tendran alcance dentro del ambito de la funcion o bucle
// en cambio con var serian en todo el codigo

console.log(i)
console.log(j)




