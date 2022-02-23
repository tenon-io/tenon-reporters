/*global describe,it*/
'use strict';

const expect = require('must');
const reporter = require('../lib/html');
const json = require('./result-url.json');

describe('Reporter: html', function() {

    it('must return a response', function() {
        reporter(json, function(err, response) {
            expect(response).not.be.undefined();
        });
    });
});
