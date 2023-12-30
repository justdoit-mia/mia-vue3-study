var counter = 0;

var add = function () {
  counter++;
};

@add
function foo() {
}

var counter;
var add;

@add
function foo() {
}

counter = 0;

add = function () {
  counter++;
};

var readOnly = require("some-decorator");

@readOnly
function foo() {
}

var readOnly;

@readOnly
function foo() {
}

readOnly = require("some-decorator");

function doSomething(name) {
  console.log('Hello, ' + name);
}

function loggingDecorator(wrapped) {
  return function() {
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finished');
    return result;
  }
}

const wrapped = loggingDecorator(doSomething);