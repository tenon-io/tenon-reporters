/*
 * tenon-reporters-html
 * Convert the Tenon's JSON response to HTML format
 *
 * https://github.com/poorgeek/tenon-reporters
 *
 * Copyright (c) 2015 Justin Stockton
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    utils = require('./tenon-utils'),
    hogan = require('hogan.js');

var HTML = function(tenonJson, callback) {

    fs.readFile('./lib/templates/html.tmpl', function (err, file) {
        if (err) {
            return callback(err, null);
        }

        // Modify a few values to make it easier to display the templates
        tenonJson = utils.updateBooleanValues(tenonJson);
        tenonJson.documentSize = utils.bytesToSize(tenonJson.documentSize);

        // Compile and render the template
        var template = hogan.compile(file.toString());
        var output = template.render(tenonJson);

        return callback(null, output);
    });
};

module.exports = HTML;
