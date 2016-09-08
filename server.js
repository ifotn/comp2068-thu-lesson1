/**
 * Created by RFreeman on 9/8/2016.
 */
    // link to the http library that ships with node
var http = require('http');

// launch the http server and send a response asynchronously
http.createServer(function(request, response) {
    response.writeHead(200); // status ok
    response.end('First node page');
}).listen(3000);

console.log('Server running on port 3000');