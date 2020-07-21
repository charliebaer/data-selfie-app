if ('geolocation' in navigator) {
    console.log('available');
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
       
        document.getElementById('latitude').textContent = lat;
        
        document.getElementById('longitude').textContent = lon;
        
    });
}
else {
    console.log('not available');
}
alert('wassup bic!')