"use strict";

var React = require("react");

var Index = React.createClass({
	displayName: "Index",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "rrutsche-page index" },
			React.createElement(
				"a",
				{ href: "#parallax" },
				"react-parallax-component"
			)
		);
	}
});

module.exports = Index;
