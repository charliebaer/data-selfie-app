# data-selfie-app

Prerequisite : git and node.js installed on your System along with a shell Program(preferred Linux based)

The code uses the GeoLocation Api and displays the latitude and longitude of your system(which is not very accurate always) and displays that on your webpage

--> main.js is the server code 

--> index.js is the JS code associated with the main index.html page 

To run the code on your system :
1. clone the repo
```javascript
git clone https://github.com/charliebaer/data-selfie-app.git
```
2. run the server from your shell
```javascript
node main.js
```
The server should start listening at port 3000

3. open your browser and navigate to http://localhost:3000

4. Once you allow the access to the permission, the latitude and longitude of your location according to Geolocation API should be displayed.

NOTE:
the console in your browser should print 'available' if the navigation object is available 

Geolocation API : https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API

Web API navigator : https://developer.mozilla.org/en-US/docs/Web/API/Navigator

node.js : https://nodejs.org/en/

Express.js : https://expressjs.com/
