/*global describe,it*/
'use strict';

const expect = require('must');
const reporter = require('../lib/xunit');
const json = require('./result-url.json');

describe('Reporter: xunit', function() {

    it('must return a response', function() {
        reporter(json, function(err, response) {
            expect(response).not.be.undefined();
        });
    });
});
