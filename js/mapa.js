// Función para abrir el elemento en pantalla completa
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([37.17059, -3.60552], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            L.Routing.control({
                waypoints: [
                    L.latLng(latitude, longitude),
                    L.latLng(37.17059, -3.60552)
                ],
                language: 'es'
            }).addTo(map);
        });
    }

    // Obtener el elemento del mapa
    var mapElement = document.getElementById("map");
    // Asignar el evento clic al enlace para abrir en pantalla completa
    document.getElementById("fullscreen-link").addEventListener("click", function (event) {
        openFullscreen(mapElement); // Llamar a la función de pantalla completa y pasar el elemento del mapa
        event.preventDefault(); // Evitar que el enlace haga la acción predeterminada de navegación
    });
});
