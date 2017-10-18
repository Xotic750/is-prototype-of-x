/**
 * @file Checks if an object exists in another object's prototype chain.
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-prototype-of-x
 */

'use strict';

var isPrimitive = require('is-primitive');
var toObject = require('to-object-x');
var isProtoOf = require('cached-constructors-x').Object.prototype.isPrototypeOf;

/**
 * This method checks if an object exists in another object's prototype chain.
 *
 * @param {Object} proto -The proto object to search for.
 * @throws {TypeError} If proto is undefined or null.
 * @param {Object} object -The object whose prototype chain will be searched.
 * @return {boolean} Does the proto object lay in the prototype chain of object.
 * @example
 * var isPrototypeOf = require('is-prototype-of-x');
 *
 * function Foo() {}
 * function Bar() {}
 * function Baz() {}
 *
 * Bar.prototype = Object.create(Foo.prototype);
 * Baz.prototype = Object.create(Bar.prototype);
 *
 * var baz = new Baz();
 *
 * isPrototypeOf(Baz.prototype, baz)); // true
 * isPrototypeOf(Bar.prototype, baz)); // true
 * isPrototypeOf(Foo.prototype, baz)); // true
 * isPrototypeOf(Object.prototype, baz)); // true
 */
module.exports = function isPrototypeOf(proto, object) {
  if (isPrimitive(object)) {
    return false;
  }

  return isProtoOf.call(toObject(proto), object);
};
