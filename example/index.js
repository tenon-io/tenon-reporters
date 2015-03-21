'use strict';

// Import the module
var fs = require('fs'),
    xmlReporter = require('../lib/html.js'),
    htmlReporter = require('../lib/html.js');

function writeExample(err, result, filename) {
    if (err) {
        console.error(err);
    }
    var path = 'example/' + filename;

    fs.writeFile('./' + path, result, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Tenon Response written to: ' + path);
    });
}

fs.readFile('./test/result-url.json', function (err, data) {
    if (err) {
        throw err;
    }

    var json = JSON.parse(data.toString());

    xmlReporter(json, function(err, result) {
        writeExample(err, result, 'xunit.xml');
    });

    htmlReporter(json, function(err, result) {
        writeExample(err, result, 'example.html');
    });
});
