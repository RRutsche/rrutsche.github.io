var React = require('react');
var Carousel = require('react-component-carousel');

var Demo = React.createClass({

	render: function() {
		return (
			<div className="rrutsche-page demo">
				<div className="text">Demo - react-component-carousel</div>
				<Carousel>
					<img src="http://placehold.it/300x200"/>
					<img src="http://placehold.it/300x200"/>
					<img src="http://placehold.it/300x200"/>
				</Carousel>
			</div>
		);
	}

});

module.exports = Demo;