'use strict';

// Convert a string value to a boolean
String.prototype.toBool = function(val) {
    return val !== '0';
};

/**
 * Update values in the Tenon JSON object to have boolean instead of string values.
 *
 * @param {Object} tenonJson
 * @return {Object}
 */
module.exports.updateBooleanValues = function(tenonJson) {
    if (typeof tenonJson.request.fragment === 'string') {
        tenonJson.request.fragment = tenonJson.request.fragment.toBool();
    }

    if (typeof tenonJson.request.store === 'string') {
        tenonJson.request.store = tenonJson.request.store.toBool();
    }
    return tenonJson;
};

/**
 * Convert bytes to an appropriate size
 * @param {number|String} bytes size in bytes
 * @return {String}
 */
module.exports.bytesToSize = function(bytes) {
    if (typeof bytes === 'number' && bytes === 0) {
        return '0 Byte';
    }
    const numBytes = (typeof bytes === 'string') ? Number.parseInt(bytes): bytes;
    const k = 1000;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(numBytes) / Math.log(k));

    return (numBytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
};
