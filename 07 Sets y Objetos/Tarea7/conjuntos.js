//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
//Un nuevo Set con los nombres de tu familia

let familia = ["Lucas", "Julian", "Sofia", "Laura", "Javier"]
console.log(familia)

//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
let familiaSet = new Set(familia)

familiaSet.add("Javier")
console.log(familiaSet)

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

familiaSet.add("Javascript")
console.log(familiaSet)
