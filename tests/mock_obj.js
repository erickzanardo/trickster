var fs = require('fs');

module.exports = {
    read: function(callback) {
        fs.readFile('/foo/file.txt', 'utf8', callback);
    }
};