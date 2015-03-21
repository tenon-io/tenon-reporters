/*global beforeEach,describe,it*/
'use strict';

var expect = require('must'),
    utils = require('../lib/tenon-utils.js');

describe('Tenon Utils', function() {

    describe('updateBooleanValues()', function() {

        var json;

        beforeEach(function() {
            json = {
                request: {
                    fragment: '1',
                    store: '1'
                }
            };
        });

        it('must convert request.fragment to a boolean', function() {
            var result = utils.updateBooleanValues(json);
            expect(result.request.fragment).to.be.true();
        });

        it('must convert request.store to a boolean', function() {
            var result = utils.updateBooleanValues(json);
            expect(result.request.store).to.be.true();
        });
    });

    describe('bytesToSize()', function() {
        it('must convert value to Kb', function() {
            expect(utils.bytesToSize(0)).to.be('0 Byte');
            expect(utils.bytesToSize(1)).to.be('1.00 Bytes');
            expect(utils.bytesToSize(10)).to.be('10.0 Bytes');
            expect(utils.bytesToSize(100)).to.be('100 Bytes');
            expect(utils.bytesToSize(1000)).to.be('1.00 KB');
            expect(utils.bytesToSize(10000)).to.be('10.0 KB');
            expect(utils.bytesToSize(100000)).to.be('100 KB');
            expect(utils.bytesToSize(1000000)).to.be('1.00 MB');
            expect(utils.bytesToSize(10000000)).to.be('10.0 MB');
        });
    });
});
