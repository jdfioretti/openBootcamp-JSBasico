let marker, map;

function initMap() {
    const posicion = {
        lat: -32.9518,
        lng: -60.6839
    }
    const map = new google.maps.Map(document.getElementById("map"), {   //renderizamos en el div "map"
        zoom: 6,
        center: posicion
    })

    const marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })

    const marker2 = new google.maps.Marker({
        position: {
            lat: 41.720556,
            lng: 2.932222
        },
        map,
        title: "Tossa"
    })

    const marker3 = new google.maps.Marker({
        position: {
            lat: 35.689556,
            lng: 139.691722
        },
        map,
        title: "Tokyo"
    })

    //Obtener geolocalizacion //

    function geoPosiciona() {
        if (navigator.geolocation) {
            const geoLoc = navigator.geolocation
            const options = { timeout: 10000 }
            const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
        } else {
            alert("Tu navegador no admite geolocalizacion")
        }
    }

}
function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.posicion(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log(error)
}