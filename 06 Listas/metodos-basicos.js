// Como trabajar con listas (arrays, arreglos) -->pueden contener cualquier valor, o tipo de dato
let var1 = 45
let var2 = { id: true }
let array = [1, "hola", true, { id: 5 }, null, undefined, var1, var2]

console.log(array)

//Acceder a valores de un array a traves de su posicion
//array[1] --> array indice
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

//Metodos para introducir nuevos valores .push() unshift()
//.push() agrega al final, todos los items que queramos --> el array mutaria

array.push("final")
console.log(array)

//.unshift() introduce valores al principio
array.unshift("inicio")
console.log(array)

//Metodos para eliminar valores --> pop() al final, y shift() al principio
//pop() elimina el ultimo elemento
array.pop()
console.log(array)
array.pop()
console.log(array)
array.pop()
console.log(array)

//shift() elimina el primer elemento
array.shift()
console.log(array)
array.shift()
console.log(array)

//Metodo para eliminar, modificar, o añadir valores
//splice(x,y,z)

const array2 = [1,2,3,4,5,6]

//Eliminar valores
array2.splice(2, 1) //en el primer parametro pasamos el indice, y en el segundo la cantidad de elementos a eliminar
console.log(array2)

//Añadir valores splice(2, 0, valor) primer parametro el indice, segundo la cantidad a eliminar, tercero el valor a agregar
array2.splice(2, 0, "hola")
console.log(array2)

//Modificar valores splice(indice, 1, valor)
array2.splice(2, 1, 3)
console.log(array2)

