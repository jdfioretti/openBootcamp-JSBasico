//import { suma, multiplica, eleva, factorial, nombre } from './modulos2/matematicas.js'
//otra forma, es importar todo -->
import * as moduloMats from './modulos2/matematicas.js'
import getAuthor, { libro } from './modulos2/literatura.js'

const sum = moduloMats.suma(4, 12)
console.log(sum)

const mult = moduloMats.multiplica(2, 5)
console.log(mult)

const ele = moduloMats.eleva(2, 2)
console.log(ele)

const fact = moduloMats.factorial(10)
console.log(fact)

console.log(moduloMats.nombre)
console.log(getAuthor())
console.log(libro)
