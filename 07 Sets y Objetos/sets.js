// Sets o conjuntos
//A diferencia de los arrays no muestran elementos duplicados o repetidos
//Esto es una ventaja al trabajar con DB por ejemplo

const array = [1,2,3,4,5,1,2,3,4,5,"hola", {id: 1}]

const miSet = new Set(array)

console.log(array)
console.log(miSet)

// Metodos --> .add()

miSet.add(9)
console.log(miSet)

// .delete()

miSet.delete("hola")
console.log(miSet)

// .clear()
/* miSet.clear()
console.log(miSet)
 */

// .has() --> similar a includes en los arrays

console.log(miSet.has(4))
console.log(miSet.has(40))

// prpiedad .size --> devuelve cantidad de elementos unicos
console.log(miSet.size)

//Iterar

miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [ ...miSet ]
console.log(ar_miSet)
console.log(ar_miSet[2])


