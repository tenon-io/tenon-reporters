/*
 * tenon-reporters-csv
 * Convert the Tenon's JSON response to CSV format
 *
 * https://github.com/poorgeek/tenon-reporters
 *
 * Copyright (c) 2015 Justin Stockton
 * Licensed under the MIT license.
 */

'use strict';

var utils = require('./tenon-utils');
var stringify = require('csv-stringify');

var CSV = function(tenonJson, callback) {

    // Modify a few values to make it easier to display the templates
    tenonJson = utils.updateBooleanValues(tenonJson);

    var columns = {
        resultTitle: 'resultTitle',
        errorTitle: 'errorTitle',
        errorDescription: 'errorDescription',
        certainty: 'certainty',
        priority: 'priority',
        signature: 'signature'
    };

    // Stringify the defined columns from the Tenon resultSet
    stringify(tenonJson.resultSet, {header: true, columns: columns}, function(err, output) {
        if (err) {
            return callback(err);
        }

        return callback(null, output);
    });
};

module.exports = CSV;
