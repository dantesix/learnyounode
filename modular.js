var fileFilter = require("./filter_modular.js");

fileFilter(process.argv[2], process.argv[3], function (err, result) {
    if (err) {
        console.log(err);
    }
    result.forEach(function (filename) {
        console.log(filename);
    });
});