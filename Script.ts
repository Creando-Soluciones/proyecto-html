Script document.addEventListener("DOMContentLoaded", () => {
    const timeElement = document.getElementById("time");
    const locationElement = document.getElementById("location");

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        timeElement.textContent = `Hora actual: ${timeString}`;
    }

    function updateLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                locationElement.textContent = `Ubicación: Latitud ${latitude.toFixed(2)}, Longitud ${longitude.toFixed(2)}`;
            }, (error) => {
                locationElement.textContent = `Error obteniendo la ubicación: ${error.message}`;
            });
        } else {
            locationElement.textContent = "La geolocalización no está soportada por este navegador.";
        }
    }

    updateTime();
    setInterval(updateTime, 1000);
    updateLocation();
});
