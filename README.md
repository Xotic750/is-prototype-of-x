<a
  href="https://travis-ci.org/Xotic750/is-prototype-of-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-prototype-of-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-prototype-of-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-prototype-of-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-prototype-of-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-prototype-of-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-prototype-of-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-prototype-of-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-prototype-of-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-prototype-of-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-prototype-of-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-prototype-of-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_is-prototype-of-x"></a>

## is-prototype-of-x

Checks if an object exists in another object's prototype chain.

<a name="exp_module_is-prototype-of-x--module.exports"></a>

### `module.exports(proto, object)` ⇒ <code>boolean</code> ⏏

This method checks if an object exists in another object's prototype chain.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Does the proto object lay in the prototype chain of object.  
**Throws**:

- <code>TypeError</code> If proto is undefined or null.

| Param  | Type                | Description                                        |
| ------ | ------------------- | -------------------------------------------------- |
| proto  | <code>Object</code> | The proto object to search for.                    |
| object | <code>Object</code> | The object whose prototype chain will be searched. |

**Example**

```js
import isPrototypeOf from 'is-prototype-of-x';

function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

const baz = new Baz();

console.log(isPrototypeOf(Baz.prototype, baz)); // true
console.log(isPrototypeOf(Bar.prototype, baz)); // true
console.log(isPrototypeOf(Foo.prototype, baz)); // true
console.log(isPrototypeOf(Object.prototype, baz)); // true
```
