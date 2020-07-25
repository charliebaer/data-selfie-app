

document.getElementById('geolocate').addEventListener('click', () => {
    if ('geolocation' in navigator) {
        console.log('Geolocation API available');
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            document.getElementById('latitude').textContent = lat;

            document.getElementById('longitude').textContent = lon;

            const data = { lat, lon };
            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            };

            const response = await fetch('/api', option);
            const json = await response.json();
            console.log(json);
        });
    }
    else {
        console.log('not available');
    }
});


