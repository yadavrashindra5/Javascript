# Hoisting

1. JavaScript hoisting is a behavior where variable, function and class declarations (but not initializations) are moved to the top of their scope by the JavaScript interpreter during the compilation phase, before the code is executed.

2. This behavior gives the impression that declarations are "hoisted" to the top, even though they are not actually moved in the source code.

# How Hoisting works

1. Declarations (for variables, functions, and classes) are hoisted.

2. Initializations and assignments are not hoisted.

3. Only the declaration is available at the top of the scope; the value is assigned at its original location.

**Note**: Variables declared with var, let, and const are hoisted. However, var is initialized with a default value of undefined, while let and const are not initialized with any default value. During the time between declaration and initialization, let and const variables exist in the **temporal dead zone (TDZ)**.

# Temporal Dead Zone

The TDZ of a variable declared in your JavaScript code is the area where the variable is hoisted but inaccessible until it is initialized with a value. This concept applies to variables declared with let and const (but not var).

# Example 1

```
printHello()
// hello

printDillion()
// ReferenceError: printDillion is not defined

function printHello() {
console.log('hello')

function printDillion() {
console.log("dillion")
}
}
```

**Note**:
As you see here, we declare **printHello**. In this function, we first execute **console.log('hello')** then we declare another function called **printDillion** which executes **console.log('dillion')** when called.

Before **printHello** is declared in the code, we try to access it by executing **printHello()**. It's accessible (since it is **hoisted** to the top of the **global scope**), so we have **"hello"** printed on the console.

But then we try to access **printDillion**, and we get a reference error:**printDillion is not defined**. **Does hoisting not occur on printDillion?**

**printDillion** is hoisted, but it is only lifted to the top of the scoped it was declared in. In this case, it is declared in a local scope--in **printHello**. Therefore, it would only be accessible in the function. Let's update our code:

```
printHello()
// hello

function printHello() {
  printDillion()
  // dillion

  console.log('hello')

  function printDillion() {
    console.log("dillion")
  }
}
```

Now, we execute **printDillion** in **printHello** before the line where **printDillion** was actually declared. Since the function is **hoisted** to the **top of the local scope of printHello function**, we're able to access it before the line where it was actually declared.

# References

1. https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/
2. https://dillionmegida.com/p/temporal-dead-zone-in-javascript/

# Practice Problem

# Problem 1

```
const a = 1
console.log(a)

var b
console.log(b)
b = 2

console.log(c)
var c = 3

console.log(d)
let d = 2
```

# Problem 2

```
const func1 = () => console.log(1)

func1()

func2()

function func2() {
  console.log(2)
}


func3()

var func3 = function func4() {
  console.log(3)
}
```

# Problem 3

```
var a = 1

function func() {
  a = 2
  console.log(a)
  var a
}

func()

console.log(a)

if (!('b' in window)) {
  var b = 1
}

console.log(b)
```

# Problem 4

```
var a = 1
function a() {
}

console.log(typeof a)

var b
function b() {
}
b = 1

console.log(typeof b)

function c() {
}
var c = 1;

console.log(typeof c)

var d = 1;

(function(){
  d = '2'
  console.log(typeof d)
  function d() {
  }
})()

console.log(typeof d)

var e = 1
const f = function e() {}

console.log(typeof e)
```

# Problem 5

```
let foo = 10
function func1() {
    console.log(foo)
    var foo = 1
}
func1 ()


function func2() {
    console.log(foo)
    let foo = 1
}
func2 ()
```

# Problem 6

```
(() => {
  if (!fn) {
    function fn() {
      console.log('2')
    }
  }
  fn()
})()

function fn() {
  console.log('1')
}

// another one
function fn1() {
  console.log('3')
}

(() => {
  if (!fn1) {
    function fn1() {
      console.log('4')
    }
  }
  fn1()
})()


// another one !
(() => {
  if (false) {
    function fn3() {
      console.log('5')
    }
  }
  fn3()
})()
```

# Problem 7

```
var foo = 1;
(function () {
  console.log(foo);
  foo = 2;
  console.log(window.foo);
  console.log(foo);
  var foo = 3;
  console.log(foo);
  console.log(window.foo)
})()
```
