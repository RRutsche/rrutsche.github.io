'use strict';

var React = require('react');

var _require = require('react-parallax');

var Parallax = _require.Parallax;
var Background = _require.Background;

var DemoParallax = React.createClass({
	displayName: 'DemoParallax',

	render: function render() {

		var style = {
			backgroundColor: '#efefef',
			color: 'white',
			textAlign: 'center'
		};
		var fontStyle = {
			fontFamily: 'Helvetica Neue, Arial, sans-serif',
			textAlign: 'center',
			fontWeight: 100
		};
		var fontStyle2 = {
			fontFamily: 'Helvetica Neue, Arial, sans-serif',
			textAlign: 'center',
			fontWeight: 100,
			fontSize: '34px',
			color: 'darkgrey'
		};

		return React.createElement(
			'div',
			{ style: style },
			React.createElement(
				'div',
				null,
				React.createElement('br', null),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'Man\'s gotta know his limitations. when a naked man\'s chasing a woman through an alley with a butcher knife and a hard-on, i figure he\'s not out collecting for the red cross. well, do you have anything to say for yourself? here. put that in your report!" and "i may have found a way out of here. this is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. don\'t p!ss down my back and tell me it\'s raining. man\'s gotta know his limitations. here. put that in your report!" and "i may have found a way out of here. here. put that in your report!" and "i may have found a way out of here. what you have to ask yourself is, do i feel lucky. well do ya\' punk? don\'t p!ss down my back and tell me it\'s raining. dyin\' ain\'t much of a livin\', boy. This is my gun, clyde! here. put that in your report!" and "i may have found a way out of here. you see, in this world there\'s two kinds of people, my friend: those with loaded guns and those who dig. you dig. man\'s gotta know his limitations. don\'t p!ss down my back and tell me it\'s raining. you see, in this world there\'s two kinds of people, my friend: those with loaded guns and those who dig. you dig. here. put that in your report!" and "i may have found a way out of here. what you have to ask yourself is, do i feel lucky. well do ya\' punk? dyin\' ain\'t much of a livin\', boy. you see, in this world there\'s two kinds of people, my friend: those with loaded guns and those who dig. you dig. this is my gun, clyde! this is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it.'
				),
				React.createElement('br', null)
			),
			React.createElement(
				Parallax,
				{ bgImage: 'www/assets/1.jpg', strength: 400, log: true },
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'When a naked man\'s chasing a woman through an alley with a butcher knife and a hard-on, i figure he\'s not out collecting for the red cross. you want a guarantee, buy a toaster. ever notice how sometimes you come across somebody you shouldn\'t have f**ked with? well, i\'m that guy. ever notice how sometimes you come across somebody you shouldn\'t have f**ked with? well, i\'m that guy. you want a guarantee, buy a toaster. are you feeling lucky punk well, do you have anything to say for yourself? are you feeling lucky punk are you feeling lucky punk don\'t p!ss down my back and tell me it\'s raining. ever notice how sometimes you come across somebody you shouldn\'t have f**ked with? well, i\'m that guy. man\'s gotta know his limitations. This is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. man\'s gotta know his limitations. are you feeling lucky punk this is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. well, do you have anything to say for yourself? this is my gun, clyde! well, do you have anything to say for yourself? dyin\' ain\'t much of a livin\', boy. when a naked man\'s chasing a woman through an alley with a butcher knife and a hard-on, i figure he\'s not out collecting for the red cross. when a naked man\'s chasing a woman through an alley with a butcher knife and a hard-on, i figure he\'s not out collecting for the red cross. are you feeling lucky punk this is my gun, clyde!'
				),
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
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'Man\'s gotta know his limitations. here. put that in your report!" and "i may have found a way out of here. what you have to ask yourself is, do i feel lucky. well do ya\' punk? this is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. are you feeling lucky punk you want a guarantee, buy a toaster. well, do you have anything to say for yourself? don\'t p!ss down my back and tell me it\'s raining. what you have to ask yourself is, do i feel lucky. well do ya\' punk? dyin\' ain\'t much of a livin\', boy. you want a guarantee, buy a toaster. what you have to ask yourself is, do i feel lucky. well do ya\' punk? You want a guarantee, buy a toaster. this is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. ever notice how sometimes you come across somebody you shouldn\'t have f**ked with? well, i\'m that guy. what you have to ask yourself is, do i feel lucky. well do ya\' punk? you see, in this world there\'s two kinds of people, my friend: those with loaded guns and those who dig. you dig. when a naked man\'s chasing a woman through an alley with a butcher knife and a hard-on, i figure he\'s not out collecting for the red cross. you want a guarantee, buy a toaster. don\'t p!ss down my back and tell me it\'s raining. you see, in this world there\'s two kinds of people, my friend: those with loaded guns and those who dig. you dig. are you feeling lucky punk here. put that in your report!" and "i may have found a way out of here. ever notice how sometimes you come across somebody you shouldn\'t have f**ked with? well, i\'m that guy.'
				),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null)
			),
			React.createElement(
				Parallax,
				{ strength: 300 },
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(
					Background,
					null,
					React.createElement('img', { src: 'http://www.fillmurray.com/400/300', alt: 'fill murray' }),
					React.createElement('div', { style: { width: 800, height: 300, backgroundColor: '#450093' } }),
					React.createElement('img', { src: 'http://www.fillmurray.com/500/300', alt: 'fill murray' })
				),
				React.createElement('br', null),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
				),
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
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'Man\'s gotta know his limitations. when a naked man\'s chasing a woman through an alley with a butcher knife and a hard-on, i figure he\'s not out collecting for the red cross. well, do you have anything to say for yourself? here. put that in your report!" and "i may have found a way out of here. this is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. don\'t p!ss down my back and tell me it\'s raining. man\'s gotta know his limitations. here. put that in your report!" and "i may have found a way out of here. here. put that in your report!" and "i may have found a way out of here. what you have to ask yourself is, do i feel lucky. well do ya\' punk? don\'t p!ss down my back and tell me it\'s raining. dyin\' ain\'t much of a livin\', boy. This is my gun, clyde! here. put that in your report!" and "i may have found a way out of here. you see, in this world there\'s two kinds of people, my friend: those with loaded guns and those who dig. you dig. man\'s gotta know his limitations. don\'t p!ss down my back and tell me it\'s raining. you see, in this world there\'s two kinds of people, my friend: those with loaded guns and those who dig. you dig. here. put that in your report!" and "i may have found a way out of here. what you have to ask yourself is, do i feel lucky. well do ya\' punk? dyin\' ain\'t much of a livin\', boy. you see, in this world there\'s two kinds of people, my friend: those with loaded guns and those who dig. you dig. this is my gun, clyde! this is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it.'
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
