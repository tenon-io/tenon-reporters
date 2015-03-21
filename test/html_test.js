/*global describe,it*/
'use strict';

var expect = require('must'),
    reporter = require('../lib/html.js'),
    json = require('./result-url.json');

describe('Reporter: html', function() {

    it('must return a response', function() {
        reporter(json, function(err, response) {
            expect(response).not.be.undefined();
        });
    });
});
