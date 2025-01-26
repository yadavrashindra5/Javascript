/**
 * Iterators are another way to iterate the collections in javascript
 * Iterator Protocol:- a standard to produce the sequence of values.
 *
 * This protocol is really an object that contains a next() method
 *
 * The next method always returns an object with value and done properties.
 *
 * The value property contains the value to be returned and the done property indicates the termination of the iterator.
 *
 *
 *
 */

let counter = 0;
let limit = 3;

const iteratorObjectProtocol = {
  next: function () {
    counter++;
    if (counter >= limit) {
      return { value: undefined, done: true };
    }
    return { value: counter, done: false };
  },
};

const myCustomObject = {
  [Symbol.iterator]: function () {
    return iteratorObjectProtocol;
  },
};

console.log([...myCustomObject]);
