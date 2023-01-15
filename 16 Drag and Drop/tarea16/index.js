const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const ele_fantasma = document.querySelector(".imagen-fantasma")


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const ele_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(ele_fantasma, 0, 0)

    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })

    seccion.addEventListener("drop", event => {
        //const ele_fantasma = document.querySelector(".imagen-fantasma")
        ele_fantasma.appendChild(parrafo)
        parrafo.remove()
    })
})