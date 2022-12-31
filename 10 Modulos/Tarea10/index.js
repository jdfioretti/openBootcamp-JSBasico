import { suma, multiplica } from './controller.js'
import chalk from 'chalk'

const sum = suma(1, 2)
console.log(sum)

const sum1 = suma(4, 5)
console.log(sum1)

const mult = multiplica(sum, sum1)
console.log(chalk.green(mult))
