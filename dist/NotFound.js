"use strict";

var React = require('react');

var NotFound = React.createClass({
	displayName: "NotFound",

	render: function render() {
		return React.createElement("div", { className: "rrutsche-page not-found" });
	}

});

module.exports = NotFound;
