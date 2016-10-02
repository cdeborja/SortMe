var React = require('react');
var ReactDOM = require('react-dom');

var Main = require("./components/main.jsx");

document.addEventListener('DOMContentLoaded', function(event) {
  var container = document.getElementById('root');
  ReactDOM.render(<Main/>, container);
});
