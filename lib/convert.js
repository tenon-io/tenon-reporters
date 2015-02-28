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

var fs = require('fs'),
    hogan = require("hogan.js");

/**
 * Tenon.io API client
 * @param {Object} Tenon JSON result
 * @return {String} xUnit XML
 */
var tenonJsonToXUnit = function(tenonJson, callback) {

    fs.readFile('./lib/xunit.tmpl', function (err, file) {
        if (err) {
            return callback(err, null);
        }

        // Modify a few values to make it easier to display the templates
        tenonJson.isStored = function() {
            return tenonJson.request.store !== '0';
        };

        // Compile and render the template
        var template = hogan.compile(file.toString());
        var output = template.render(tenonJson);

        return callback(null, output);
    });
};

module.exports = tenonJsonToXUnit;
