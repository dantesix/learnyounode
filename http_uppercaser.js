var http = require('http');
var server = http.createServer(function (request, response) {
    var body = [];
    request.on('error', function(err) {
        console.error(err);
    }).on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {
        response.end(Buffer.concat(body).toString().toUpperCase());
    });
})
server.listen(process.argv[2]);