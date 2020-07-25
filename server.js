
const express = require('express');

const datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

app.use(express.json());

const database = new datastore('database.db');
database.loadDatabase();

database.insert({
    name : "Charles",
    status : "dufus"
});
app.post('/api', (request, response) => {
    console.log('request received');
    console.log((request.body));
    const data = request.body;
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    })

});
