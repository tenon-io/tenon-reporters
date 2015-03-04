'use strict';

// Import the module
var fs = require('fs'),
    convert = require('../lib/html.js');

fs.readFile('./test/result-url.json', function (err, data) {
    if (err) {
        throw err;
    }

    console.log(JSON.parse(data.toString()));
    
    convert(JSON.parse(data.toString()), function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);

            fs.writeFile('test.html', result, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Tenon Response written to: test.html');
            });
        }
    });
});
