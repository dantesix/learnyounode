var fileFilter = function (path, ext, callback) {
    let fs = require("fs");
    fs.readdir(path, function (err, files) {
        if (err) return callback(err);
        let result = [];
        for (let i = 0; i < files.length; i++) if (files[i].endsWith("." + ext)) result.push(files[i]);
        callback(err, result);
    });
};

module.exports = fileFilter;