var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./jsx/App.jsx');

ReactDOM.render(
    <Main />, 
    document.getElementById('app')
);

module.exports = Main;