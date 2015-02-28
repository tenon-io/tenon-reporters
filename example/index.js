'use strict';

// Import the module
var fs = require('fs'),
    convert = require('../lib/xunit.js');

fs.readFile('./test/result.json', function (err, data) {
    if (err) {
        throw err;
    }

    convert(JSON.parse(data.toString()), function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    });
});
