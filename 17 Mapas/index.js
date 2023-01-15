let marker, map;

function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    const map = new google.maps.Map(document.getElementById("map"), {   //renderizamos en el div "map"
        zoom: 4,
        center: posicion
    })

    const marker = new google.maps.Marker({
        position: posicion,
        map: map,
        title: "Posición Inicial"
    })

    //Obtener geolocalizacion //

    function geoPosiciona() {
        if (navigator.geolocation) {
            const geoLoc = navigator.geolocation
            const options = { timeout: 60000 }
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