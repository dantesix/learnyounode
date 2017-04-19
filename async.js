var async = require('async');
var http = require('http');
var bl = require('bl');

async.series([
        function (callback) {http.get(process.argv[2], (r) => processGet(r, callback))},
        function (callback) {http.get(process.argv[3], (r) => processGet(r, callback))},
        function (callback) {http.get(process.argv[4], (r) => processGet(r, callback))}
    ],
    () => {}
    );

function processGet (r, cb) {
    let response = r.setEncoding("utf8");
    response.pipe(bl(function (err, data) {
        let result = data.toString();
        console.log(result);
    }));
    cb();
}