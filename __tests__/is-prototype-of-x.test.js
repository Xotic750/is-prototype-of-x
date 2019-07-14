let isPrototypeOf;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isPrototypeOf = require('../../index.js');
} else {
  isPrototypeOf = returnExports;
}

describe('isPrototypeOf', function() {
  it('is a function', function() {
    expect(typeof isPrototypeOf).toBe('function');
  });

  it('should return false when object is a primitive', function() {
    const falsey = new Array(7);
    falsey[1] = null;
    falsey[2] = void 0;
    falsey[3] = false;
    falsey[4] = 0;
    falsey[5] = NaN;
    falsey[6] = '';

    const expected = falsey.map(function() {
      return false;
    });

    const actual = falsey.map(function(item) {
      return isPrototypeOf(Object.prototype, item);
    });

    expect(actual).toStrictEqual(expected);
  });

  it('should throw when proto is null or undefined or null and object is an object', function() {
    expect(function() {
      isPrototypeOf(void 0, {});
    }).toThrow();

    expect(function() {
      isPrototypeOf(null, {});
    }).toThrow();
  });

  it('should return true for descendants', function() {
    const Foo = function() {};

    const Bar = function() {};

    const Baz = function() {};

    Bar.prototype = Object.create(Foo.prototype);
    Baz.prototype = Object.create(Bar.prototype);

    const baz = new Baz();

    expect(isPrototypeOf(Baz.prototype, baz)).toBe(true);
    expect(isPrototypeOf(Bar.prototype, baz)).toBe(true);
    expect(isPrototypeOf(Foo.prototype, baz)).toBe(true);
    expect(isPrototypeOf(Object.prototype, baz)).toBe(true);
  });
});
