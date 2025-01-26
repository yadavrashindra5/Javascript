// Example 1
function regularFn() {
  // this is standalone function so, it will refer to global object
  console.log(this);
}

// regularFn()

//Example 2
const arrowFn = () => {
  //As this function is defined inside global function so, this will refer to global object
  console.log(this);
};

// arrowFn();

//Example 3
const student = {
  name: "tejas",
  getName() {
    console.log(this);
  },
  getName2: () => {
    console.log(this);
  },
};

// student.getName(); //this is refer to object because value of this keyword in regular function depend on how the function is invoked. If function is invoked as a method then, this refer to that object which called that object

// student.getName2(); // this refer to global object because this function is defined inside object but object is defined inside global object and arrow function always refers to parent lexical scope.

// Example 4
const student2 = {
  name: "tejas",
  getName() {
    return function getName() {
      console.log(this);
    };
  },
  getName2: () => {
    return () => {
      console.log(this);
    };
  },

  getName3: function () {
    return () => {
      console.log(this); //Here this refer to this object because it inherit this from parent object which is student
    };
  },
};

// const s1 = student2.getName();
// s1();

// const s2 = student2.getName2();
// s2();

// const s3 = student2.getName3();
// s3();

const student3 = {
  name: "tejas",
  getName() {
    return function () {
      console.log(this);
    };
  },
  getName2() {
    return () => {
      console.log(this);
    };
  },
};

const s31 = student3.getName();
const s32 = student3.getName2();

const student4 = {
  name: "trisha",
  getName: s31,
  getName2: s32,
};

// student4.getName();
// student4.getName2();


// Example 5
const obj = {
  a: 1,
  b: function() {
    console.log(this.a)
  },
  c() {
    console.log(this.a)
  },
  d: () => {
    console.log(this.a)
  },
  e: (function() {
    return () => {
      console.log(this.a);
    }
  })(),
  f: function() {
    return () => {
      console.log(this.a);
    }
  }
}

console.log(obj.a)//1
obj.b()//1
;(obj.b)()//undefined
const b = obj.b
b()//undefined
obj.b.apply({a: 2})//2
obj.c()//1
obj.d()//undefined
;(obj.d)()//undefined
obj.d.apply({a:2})//undefine
obj.e()//undefined
;(obj.e)()//undefined
obj.e.call({a:2})//undefined
obj.f()()//1
;(obj.f())()//undefined
obj.f().call({a:2})//1