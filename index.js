/************************************************
FILENAME
server_simple.js
DESCRIPTION
creates a simple web server that
display "Hello Dynamic World Wide Web"
HOW TO START SERVER:
1) from terminal run 'node simple_server.js'
2) open web browser visit http://127.0.0.1:8080
*************************************************/

// Include the HTTP Node library
// http://nodejs.org/docs/latest/api/http.html
var http = require('http');

// define the IP and port number
var localIP = "10.18.1.124"; // 127.0.0.1 is used when running the server locally
var port = 8080; // port to run webserver on

function sayHello(req, res) {
    
    console.log("We've got a request for " + req.url);
    
    // HTTP response header - the content will be HTML MIME type
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Write out the HTTP response body
    res.write('<html><body>' +
    '<h1>Hello Dynamic World Wide Web<h1>'+
    '</body></html>');
    
    // End of HTTP response
    res.end();
    
}
var server = http.createServer(sayHello);

// Turn server on - now listening for requests on localIP and port
server.listen(port, localIP);

var mraa = require('/usr/local/lib/node_modules/mraa');
var groveSensor = require('/usr/local/lib/node_modules/jsupm_grove');


var button = new groveSensor.GroveButton(29); // set up digital input on pin #5

var buttonState = button.value();  // read the value of the digital pin
console.log(buttonState);          // write the value to the console for debugging

// Read the temperature ten times, printing both the Celsius and
// equivalent Fahrenheit temperature, waiting one second between readings
var i = 0;
function disp(){
  console.log("The current temp isa:" + temp.value())
  console.log("Vibration is at:" + this.buttonState) // put in later
}
console.log('Server running at http://'+ localIP +':'+ port +'/');

setInterval(disp, 500);