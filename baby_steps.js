let result = 0;

process.argv.forEach(function (value, index) {
    if (index > 1) result += parseInt(value);
});

console.log(result);