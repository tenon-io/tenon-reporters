/*
 * tenon-reporters
 * Convert the Tenon's JSON response to the xUnit XML format
 *
 * https://github.com/poorgeek/tenon-reporters
 *
 * Copyright (c) 2015 Justin Stockton
 * Licensed under the MIT license.
 */

'use strict';

var utils = require('./tenon-utils'),
    fs = require('fs'),
    hogan = require("hogan.js");

var HTML = function(tenonJson, callback) {

    fs.readFile('./lib/templates/html.tmpl', function (err, file) {
        if (err) {
            return callback(err, null);
        }

        // Modify a few values to make it easier to display the templates
        tenonJson = utils.updateBooleanValues(tenonJson);
        tenonJson.documentSize = utils.bytesToKb(tenonJson.documentSize);

        // Compile and render the template
        var template = hogan.compile(file.toString());
        var output = template.render(tenonJson);

        return callback(null, output);
    });
};

module.exports = HTML;
