var assert = require('assert');
var trickster = require('../trickster.js');

describe('Mocking require', function() {
    var stubs = {
        'fs': {
           readFile: function(path, charset, callback) {
               callback(null, 'Require was tricked!');
           }
        }
    };

    var mockObj = trickster.trickRequire('./tests/mock_obj.js', stubs);

    it('should override the default fs module', function(done) {
        mockObj.read(function(err, data) {
            assert.equal(null, err);
            assert.equal('Require was tricked!', data);
            done();
        });
    });
})