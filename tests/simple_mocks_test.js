var assert = require('assert');
var trickster = require('../trickster.js');

describe('Plain mocks', function() {
    var mock = trickster.mock();
    describe('Functions', function() {
        mock.calls('myFunction').andReturn('Some Value!');
        it('Function must be mocked', function() {
            assert.equal('Some Value!', mock.myFunction());
        });
    });

    describe('Attributes', function() {
        mock.has('someAttr').withValue('Some Value!');
        it('Attr must be mocked', function() {
            assert.equal('Some Value!', mock.someAttr);
        });
    });
})