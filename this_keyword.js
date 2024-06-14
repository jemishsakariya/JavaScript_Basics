/*
// The value of the this depends on how it is called, not on where it's defined.
*/

// console.log(this); // globleObject - Browser: window, NodeJs: Node Module: {}

/*
// this inside function
// inside fun the value depends on "strict/non-strict" mode
// this inside non-strict mode => There is "this subtitution"
// this keyword value is non-strict mode => window & strict mode => undefine or null

// "use strict";

function insideFun() {
  console.log(this);
}

// "use strict"; // => value undefine
insideFun();
// if you want to get value with using "use strict" then write like below using reference
// window.insideFun();
*/

/*
// this inside Object
const obj = {
  a: 10,
  fun: function () {
    console.log(this);
  },
  fun2: () => {
    console.log(this);
  },
  fun3: function () {
    // enclosing lexical conext
    // arrow function is not binding with this keyword

    const arrowFun = () => {
      console.log(this);
    };
    arrowFun();
  },
};

obj.fun(); // value of this keyword is obj

// in arrow function
obj.fun2(); // value will be lexical context, here obj lexical context is globle, so it gives "window"

obj.fun3();
*/

/*
// this refer to its module
// Initially in cjs top level `this` and module.exports points to same empty object `{}`.
// But after `module.exports` is reassigned to something else, `this` still points to that empty object `{}`
// "Ye khel hai original module ka this point to original module only" => reassign(m.e = {}) & add somthing(.x)

module.exports = { a: 10 };
module.exports.x = { b: 10 };
console.log("module: ", module);
console.log("this: ", this);
*/

/*
// Tricky Question => https://javascript.plainenglish.io/the-this-keyword-in-javascript-for-generic-and-arrow-functions-a-detailed-guide-5be2070184bf
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
*/

/*
// this inside function constructor
function Pet(type, legs) {
  this.type = type;
  this.legs = legs;

  this.logInfo = function () {
    console.log(this); // Timeout Object
    console.log(myCat); // Pet { type: 'Cat', legs: 4, logInfo: [Function (anonymous)] }
    console.log(this === myCat); // false
  };
}

const myCat = new Pet("Cat", 4);
setTimeout(myCat.logInfo, 100); // myCat.logInfo it called by "callback" so "this" points to Timeout Object.
// myCat.logInfo();
*/

/*
function foo(something) {
  this.a = something;
}

var obj1 = {
  foo: foo,
};

var obj2 = {};

obj1.foo(2); // it will access foo() this.a and it writen inside obj2 so this refer to obj2 and it create new a property inside obj2.
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4
*/

/*
function foo(p1, p2) {
  this.val = p1 + p2;
}

// using `null` here because we don't care about
// the `this` hard-binding in this scenario, and
// it will be overridden by the `new` call anyway!
var bar = foo.bind(null, "p1");
var baz = new bar("p2");
console.log(baz.val); // p1p2
*/

/*
function foo() {
  // return an arrow function
  return () => {
    // `this` here is lexically inherited from `foo()`
    console.log(this.a);
  };
}
var obj1 = {
  a: 2,
};
var obj2 = {
  a: 3,
};
var bar = foo.call(obj1);
bar.call(obj2); // 2, not 3!

function foo() {
  return function () {
    // `this` here is lexically inherited from `foo()`
    console.log(this.a);
  };
}
var obj1 = {
  a: 2,
};
var obj2 = {
  a: 3,
};
var bar = foo.call(obj1);
bar.call(obj2); // 3, not 2!
*/

/*
var length = 10;
function fn() {
  console.log(this.length); // in browser it's logs => 10
}

var obj = {
  length: 5,
  foo: fn,
  method: function (fn) {
    fn();
    console.log(arguments);
    arguments[0]();
  },
};
obj.foo();
obj.method(fn, 1);
*/

/*
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
var bar = function () {
  console.log(this);
  foo.call(obj);
};
bar(); //2
bar.call(this); //2
setTimeout(bar, 100); //2
*/

/*
function Person(name) {
  this.name = name;
  return "one";
}

const p1 = new Person("Aa");
console.log(p1);

function Student(name) {
  this.name = name;
  return {};
}

const s1 = new Student("Bb");
console.log(s1);
*/