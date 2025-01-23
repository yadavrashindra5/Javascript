# Behavior of this keyword in regular function in javascript

1. The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined.
2. When a regular function is invoked as a method of an object (obj.method()), this points to that object.
3. When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode).
