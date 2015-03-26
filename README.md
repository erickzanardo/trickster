# Trickster
Simple mock framework for nodejs

Install it
```
npm install trickster
```

```javascript
var trickster = require('trickster');
```

### Mocking attributes
```javascript
var mock = trickster.mock();
mock.has('someAttr').withValue('Some Value!');
mock.someAttr; // Some Value!
```
### Mocking functions

```javascript
var mock = trickster.mock();
mock.calls('myFunction').andReturn('Some Value!');
mock.myFunction(); // Some Value!
```
or
```javascript
var mock = trickster.mock();
mock.calls('myFunction').andExecute(function() { return 'Some Value!' });
mock.myFunction(); // Some Value!
```

### Mocking an existent object
```javascript
var obj = {
  attr1: 'Original value',
  attr2: 'Another original value'
}

var mock = trickster.trick(obj);
mock.has('attr1').withValue('Mocked Value!');
mock.attr1; // Mocked Value!
mock.attr2; // Another original value
```

### Mocking require
```javascript
// mock_obj.js
var fs = require('fs');

module.exports = {
    read: function(callback) {
        fs.readFile('/foo/file.txt', 'utf8', callback);
    }
};

// mock_obj_test.js
var stubs = {
    'fs': {
       readFile: function(path, charset, callback) {
           callback(null, 'Require was tricked!');
       }
    }
};
var mockObj = trickster.trickRequire('./mock_obj.js', stubs);
mockObj.read(function(err, data) {
  console.log(data); // Require was tricked!
});
```

Thanks to the guys from [proxyquire](https://github.com/thlorenz/proxyquire), for the awesome module that made this feature of trickster possible.
