var http = require('http');

http.get(process.argv[2], (r) => {
    let response = r.setEncoding("utf8");
    response.on("data", (data) => {
        console.log(data);
    });
});