/*global describe,it*/
'use strict';

var expect = require('must'),
    reporter = require('../lib/xunit.js'),
    json = require('./result-url.json');

describe('Reporter: xunit', function() {

    it('must return a response', function() {
        reporter(json, function(err, response) {
            expect(response).not.be.undefined();
        });
    });
});
