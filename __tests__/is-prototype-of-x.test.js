import isPrototypeOf from '../src/is-prototype-of-x';

describe('isPrototypeOf', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof isPrototypeOf).toBe('function');
  });

  it('should return false when object is a primitive', function() {
    expect.assertions(1);
    const falsey = new Array(7);
    falsey[1] = null;
    /* eslint-disable-next-line no-void */
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
    expect.assertions(2);
    expect(function() {
      /* eslint-disable-next-line no-void */
      isPrototypeOf(void 0, {});
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      isPrototypeOf(null, {});
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return true for descendants', function() {
    expect.assertions(4);
    /* eslint-disable-next-line lodash/prefer-noop */
    const Foo = function() {};

    /* eslint-disable-next-line lodash/prefer-noop */
    const Bar = function() {};

    /* eslint-disable-next-line lodash/prefer-noop */
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
