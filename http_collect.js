var http = require('http');
var bl = require('bl');

http.get(process.argv[2], (r) => {
    let response = r.setEncoding("utf8");
    response.pipe(bl(function (err, data) {
        let result = data.toString();
        console.log(result.length);
        console.log(result);
    }));
});