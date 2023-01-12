// $(selector).accion()

//es conveniente usar:

/* $(document).ready(() => {
    $("li").hide()
    //$("h1").hide()
}) */

// o version simplificada:

$(() => {
    //selectores
    //id = "#el-1" -> #
    //class = ".el-1" -> .
    //$("#el-1").hide()

    $(".hide-btn").click(() => {
        console.log("ocultando...")
        //$("h1").hide()
        $("h1").fadeOut()

    })
    $(".show-btn").click(() => {
        console.log("mostrando...")
        //$("h1").show()
        $("h1").fadeIn()    //oculatamos el h1
    })

    $("li").click(() => {
        $("h1").css({ color: "red" }) //cambiamos color de h1 con 1 click
    })

    $("li").dblclick(() => {
        $("h1").css({ color: "blue" }) //cambiamos color de h1 con doble click
    })

    $(".new-element").click(() => {
        $("ul").append("<li>New Elemnt</li>") //agregamos elemento al final
    })

    $(".new-element").click(() => {
        $("ul").prepend("<li>New Elemnt</li>") //agregamos elemento al principio
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })

    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    })

})




