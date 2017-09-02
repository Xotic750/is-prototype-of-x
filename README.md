<a href="https://travis-ci.org/Xotic750/is-prototype-of-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/is-prototype-of-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-prototype-of-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-prototype-of-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-prototype-of-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-prototype-of-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-prototype-of-x" title="npm version">
<img src="https://badge.fury.io/js/is-prototype-of-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_is-prototype-of-x"></a>

## is-prototype-of-x
Checks if an object exists in another object's prototype chain.

**Version**: 1.0.1  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_is-prototype-of-x--module.exports"></a>

### `module.exports(proto, object)` ⇒ <code>boolean</code> ⏏
This method checks if an object exists in another object's prototype chain.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Does the proto object lay in the prototype chain of object.  
**Throws**:

- <code>TypeError</code> If proto is undefined or null.


| Param | Type | Description |
| --- | --- | --- |
| proto | <code>object</code> | The proto object to search for. |
| object | <code>object</code> | The object whose prototype chain will be searched. |

**Example**  
```js
var isPrototypeOf = require('is-prototype-of-x');

function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

isPrototypeOf(Baz.prototype, baz)); // true
isPrototypeOf(Bar.prototype, baz)); // true
isPrototypeOf(Foo.prototype, baz)); // true
isPrototypeOf(Object.prototype, baz)); // true
```
