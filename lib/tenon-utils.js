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
    tenonJson.request.fragment = tenonJson.request.fragment.toBool();
    tenonJson.request.store = tenonJson.request.store.toBool();
    return tenonJson;
};

/**
 * Convert bytes to kilobytes
 * @param {Integer} size in bytes
 * @return {Integer}
 */
module.exports.bytesToKb = function(int) {
    return Math.round(parseInt(int, 10) / 1024);
};

/**
 * Parse the Tenon standards string and return a WCAG2 object
 * @param {String} str Full WCAG2 standard
 * @return {Object} WCAG2 Success Criteria
 */
module.exports.getStandardObj = function(str) {
    return str;
};
