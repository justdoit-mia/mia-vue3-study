// CommonJS 的写法
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

// ES6 的写法
import { func1, func2 } from 'moduleA';

// commonJS 的写法
var React = require('react');

var Breadcrumbs = React.createClass({
  render() {
    return <nav />;
  }
});

module.exports = Breadcrumbs;

// ES6 的写法
import React from 'react';

class Breadcrumbs extends React.Component {
  render() {
    return <nav />;
  }
};

export default Breadcrumbs;


function makeStyleGuide() {
}

export default makeStyleGuide;

const StyleGuide = {
  es6: {
  }
};

export default StyleGuide;