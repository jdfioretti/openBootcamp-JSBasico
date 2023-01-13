//localStorage.setItem("nombre", "Javier")
//localStorage.setItem("nombre", "Lucas") //para cambiar solo lo hacemos nuevamente

//console.log(localStorage.getItem("nombre"))

//si queremos guardar un objeto --> json.stringify
localStorage.setItem("persona", JSON.stringify({ nombre: "Javier", edad: 51 }))

//para que nos muestre un objeto
//console.log(JSON.parse(localStorage.getItem("persona")))

//como eliminar un item
localStorage.removeItem("nombre")

//si queremos ver el item ahora, nos devuelve null

//Sesion Storage

sessionStorage.setItem("nombre", "Laura")

// El resto es igual que localStorage --> agregar, editar, eliminar

/* Cookies  --> esto es diferente */
//crear

document.cookie = "nombreCookie=JaviCookie";
console.log(document.cookie)

document.cookie = "caducidadCookie=Nombre";
expires = "" + new Date(2023, 0, 1).toUTCString()  