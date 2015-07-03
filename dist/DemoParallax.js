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
				{ bgImage: 'www/assets/3.jpg', strength: 300, log: true },
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h1',
					null,
					'first parallax'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('img', { src: 'http://www.fillmurray.com/400/400', alt: 'fill murray' }),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h2',
					null,
					'filled with murray'
				),
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
					'second one'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h2',
					null,
					'it\'s also filled'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('img', { src: 'http://www.fillmurray.com/g/500/400', alt: 'fillmurray' }),
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
				{ bgImage: 'www/assets/1.jpg' },
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h1',
					null,
					'last one...'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('img', { src: 'http://www.fillmurray.com/g/600/500', alt: 'fillmurray' }),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null)
			)
		);
	}

});

module.exports = DemoParallax;
