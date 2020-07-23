if ('geolocation' in navigator) {
    console.log('Geolocation API available');
    navigator.geolocation.getCurrentPosition((position) => {
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

        fetch('/api', option);
    });
}
else {
    console.log('not available');
}