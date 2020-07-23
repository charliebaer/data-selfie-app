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
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }

        fetch('/api', option);
    });
}
else {
    console.log('not available');
}