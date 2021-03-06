import isPrimitive from 'is-primitive-x';
import toObject from 'to-object-x';

const isProtoOf = {}.constructor.isPrototypeOf;

/**
 * This method checks if an object exists in another object's prototype chain.
 *
 * @param {object} proto -The proto object to search for.
 * @throws {TypeError} If proto is undefined or null.
 * @param {object} object -The object whose prototype chain will be searched.
 * @returns {boolean} Does the proto object lay in the prototype chain of object.
 */
const isPrototypeOf = function isPrototypeOf(proto, object) {
  return isPrimitive(object) ? false : isProtoOf.call(toObject(proto), object);
};

export default isPrototypeOf;
