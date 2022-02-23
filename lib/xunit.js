/*
 * tenon-reporters-xunit
 * Convert the Tenon's JSON response to the xUnit XML format
 *
 * https://github.com/poorgeek/tenon-reporters
 *
 * Copyright (c) 2015 Justin Stockton
 * Licensed under the MIT license.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const utils = require('./tenon-utils');
const hogan = require('hogan.js');

const XUnit = function(tenonJson, callback) {

    fs.readFile(path.join(__dirname, 'templates', 'xunit.tmpl'), function (err, file) {
        if (err) {
            return callback(err, null);
        }

        // Modify a few values to make it easier to display the templates
        tenonJson = utils.updateBooleanValues(tenonJson);

        // Compile and render the template
        const template = hogan.compile(file.toString());
        const output = template.render(tenonJson);

        return callback(null, output);
    });
};

module.exports = XUnit;
