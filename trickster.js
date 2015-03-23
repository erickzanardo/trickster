// Mock
function Mock(obj) {
  // Comping object
  if (obj) {
    for (var i in obj) {
      this[i] = obj[i];
    }
  }
}

Mock.prototype.calls = function(name) {
  return new StubBuilder(this, name);
};

Mock.prototype.has = function(name) {
  return new AttrBuilder(this, name);
}

// StubBuilder
function StubBuilder(mock, name) {
  this.mock = mock;
  this.name = name;
}

StubBuilder.prototype.andReturn = function(value) {
  this.mock[this.name] = function() {
    return value;
  }
};

// Attribute builder
function AttrBuilder(mock, name) {
  this.mock = mock;
  this.name = name;
}

AttrBuilder.prototype.withValue = function(value) {
  this.mock[this.name] = value;
};

// Trickster
function Trickster() {
}

Trickster.prototype.mock = function() {
  return new Mock();
};

Trickster.prototype.trick = function(obj) {
  return new Mock(obj);
}

module.exports = new Trickster();