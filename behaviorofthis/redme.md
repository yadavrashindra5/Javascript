# Behavior of this keyword in regular function in Javascript

1. The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined.

2. When a regular function is invoked as a method of an object (obj.method()), this points to that object.

3. When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode).


# Behavior of this keyword in arrow function in Javascript

1. Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined. 

2. This behavior makes arrow functions particularly useful for callbacks and preserving context.

3. However, arrow functions do not have their own this binding.

4. Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods.


 Note: The value of **this** always changes based on **how a function is called**, **even when the function was defined on an object at creation**. This is valid only for regular function.

