var assert = require('assert');
var trickster = require('../trickster.js');

describe('Mocking a real object', function() {
    var someObject = {
        someFunction: function() {
            return this.otherFunction();
        },
        otherFunction: function() {
            return 'Original value';
        },
        someAttr: 'Original value'
    };

    var mock = trickster.trick(someObject);
    describe('Functions', function() {
        mock.calls('otherFunction').andReturn('Tricked Value!');
        it('Function must be mocked', function() {
            assert.equal('Tricked Value!', mock.someFunction());
        });
    });

    describe('Attributes', function() {
        mock.has('someAttr').withValue('Mocked Value!');
        it('Attr must be mocked', function() {
            assert.equal('Mocked Value!', mock.someAttr);
        });
    });
})