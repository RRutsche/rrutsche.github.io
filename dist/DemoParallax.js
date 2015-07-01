'use strict';

var React = require('react');
var Parallax = require('react-parallax');

var DemoParallax = React.createClass({
	displayName: 'DemoParallax',

	render: function render() {

		return React.createElement(
			'div',
			{ className: 'rrutsche-page demo-parallax' },
			React.createElement(
				Parallax,
				{ bgImage: 'www/assets/1.jpg', strength: 300, log: true },
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h1',
					null,
					'first parallax'
				),
				React.createElement(
					'h2',
					null,
					'with some crazy text that describes: nothing!'
				),
				React.createElement('br', null),
				React.createElement(
					'h2',
					null,
					'it\'s just there'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null)
			),
			React.createElement(
				'div',
				null,
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h1',
					null,
					'none-parallax content'
				),
				React.createElement('br', null),
				React.createElement(
					'h2',
					null,
					'-------------'
				),
				React.createElement(
					'h2',
					null,
					'because we can'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null)
			),
			React.createElement(
				Parallax,
				{ bgImage: 'www/assets/2.jpg', blur: 3 },
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h1',
					null,
					'its the third'
				),
				React.createElement(
					'h2',
					null,
					'text just has to fill the container to make the image visible'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h2',
					null,
					'it\'s just there'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null)
			),
			React.createElement(
				Parallax,
				{ bgColor: 'darkgrey' },
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h1',
					null,
					'guess'
				),
				React.createElement(
					'h1',
					null,
					'what?'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null)
			),
			React.createElement(
				Parallax,
				{ bgImage: 'www/assets/3.jpg' },
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h1',
					null,
					'last one...'
				),
				React.createElement(
					'h2',
					null,
					'one more placeholder'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h2',
					null,
					'empty'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null)
			)
		);
	}

});

module.exports = DemoParallax;
