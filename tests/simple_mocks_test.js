var assert = require('assert');
var trickster = require('../trickster.js');

describe('Plain mocks', function() {
    var mock = trickster.mock();
    describe('Functions', function() {
        it('Function must be assembled and returing correctly', function() {
            mock.calls('myFunction').andReturn('Some Value!');
            assert.equal('Some Value!', mock.myFunction());
        });
        it('Function must be executed as mocked', function() {
            mock.calls('myFunction').andExecute(function() { return 'Some Value!' });
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