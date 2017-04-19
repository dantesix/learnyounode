var http = require("http");
var url = require("url");

var server = http.createServer(function (request, response) {
    let requestUrl = url.parse(request.url);
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(handleRequest(requestUrl.pathname, requestUrl.query)));

    function handleRequest (path, query) {
        let rawDate = new Date(query.split("=")[1]);
        if (path == "/api/unixtime") return {"unixtime": rawDate.getTime()};
        if (path == "/api/parsetime") return {
            "hour": rawDate.getHours(),
            "minute": rawDate.getMinutes(),
            "second": rawDate.getSeconds()
        };
    }
});
server.listen(process.argv[2]);