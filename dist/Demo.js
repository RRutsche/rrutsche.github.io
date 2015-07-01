"use strict";

var React = require("react");

var Demo = React.createClass({
	displayName: "Demo",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "rrutsche-page demo" },
			React.createElement(
				"div",
				{ className: "text" },
				"Demo - react-component-carousel"
			),
			React.createElement("div", { className: "carousel-container" })
		);
	}

});

module.exports = Demo;
/*<Carousel>
					<img src="http://placehold.it/300x200"/>
					<img src="http://placehold.it/300x200"/>
					<img src="http://placehold.it/300x200"/>
					<img src="http://placehold.it/300x200"/>
					<img src="http://placehold.it/300x200"/>
					<img src="http://placehold.it/300x200"/>
				</Carousel>*/
