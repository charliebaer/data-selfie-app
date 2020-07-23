
/*
const express = require('express');

const app = express();

app.listen(3000, () => console.log("listening at port 3000"));

app.use(express.static('public'));

app.use(express.json({ limit: '2mb' }));

app.post('/api', (request, response) => {
    console.log('request recieved!');
    console.log(typeof (response.body));
}) 
*/
const express = require('express');


const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));



app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});

app.post('/api', (request, response) => {
    console.log(response.body);


});