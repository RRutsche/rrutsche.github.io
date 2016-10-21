'use strict';

var React = require('react');

var _require = require('react-parallax');

var Parallax = _require.Parallax;
var Background = _require.Background;

var DemoParallax = React.createClass({
	displayName: 'DemoParallax',

	componentWillMount: function componentWillMount() {
		var fontStyle = {
			fontFamily: 'Helvetica Neue, Arial, sans-serif',
			textAlign: 'center',
			fontWeight: 100
		};
		this.state = {
			image: 'www/assets/1.jpg',
			children: React.createElement(
				'h1',
				{ style: fontStyle },
				'children no1'
			)
		};
	},

	changeImage: function changeImage() {
		this.setState({
			image: 'www/assets/2.jpg'
		});
	},

	changeChildren: function changeChildren() {
		var fontStyle = {
			fontFamily: 'Helvetica Neue, Arial, sans-serif',
			textAlign: 'center',
			fontWeight: 100
		};
		this.setState({
			children: React.createElement(
				'h1',
				{ style: fontStyle },
				'children no2!!!!'
			)
		});
	},

	render: function render() {
		var style = {
			backgroundColor: '#efefef',
			color: 'white',
			textAlign: 'center'
		};
		var fontStyle2 = {
			fontFamily: 'Helvetica Neue, Arial, sans-serif',
			textAlign: 'center',
			fontWeight: 100,
			color: 'darkgrey'
		};

		return React.createElement(
			'div',
			{ style: style },
			React.createElement(
				Parallax,
				{ strength: 300, log: true },
				React.createElement(
					Background,
					{ className: 'custom-bg' },
					React.createElement('img', { src: 'http://www.fillmurray.com/400/300', alt: 'fill murray' })
				),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
				)
			),
			React.createElement(
				'div',
				null,
				React.createElement('br', null),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
				),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
				),
				React.createElement('br', null),
				React.createElement(
					'h1',
					{ style: fontStyle2, onClick: this.changeImage },
					'change image'
				),
				React.createElement(
					'h1',
					{ style: fontStyle2, onClick: this.changeChildren },
					'change children'
				)
			),
			React.createElement(
				Parallax,
				{
					bgImage: this.state.image,
					strength: 200,
					contentStyles: [{ property: 'blur', min: 0, max: 2 }] },
				React.createElement('br', null),
				React.createElement('br', null),
				this.state.children,
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
				),
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
				{ style: { width: '500px', margin: '20px auto' } },
				React.createElement(
					Parallax,
					{
						bgImage: 'www/assets/3.jpg',
						strength: 200,
						contentStyles: [{ property: 'blur', min: 0, max: 2 }] },
					React.createElement('br', null),
					this.state.children,
					React.createElement(
						'h1',
						{ style: fontStyle2 },
						'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
					),
					React.createElement('br', null)
				)
			),
			React.createElement(
				Parallax,
				{ strength: 300 },
				React.createElement(
					Background,
					null,
					React.createElement('img', { src: 'http://www.fillmurray.com/400/300', alt: 'fill murray' }),
					React.createElement('div', { style: { width: 800, height: 300, backgroundColor: '#450093' } }),
					React.createElement('img', { src: 'http://www.fillmurray.com/500/300', alt: 'fill murray' })
				),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
				)
			),
			React.createElement(
				'div',
				null,
				React.createElement('br', null),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
				),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
				),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
				),
				React.createElement(
					'h1',
					{ style: fontStyle2 },
					'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
				),
				React.createElement('br', null)
			)
		);
	}

});

module.exports = DemoParallax;
