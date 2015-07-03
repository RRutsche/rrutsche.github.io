var React = require('react');
var Parallax = require('react-parallax');

var DemoParallax = React.createClass({

	render: function() {

		return (
			<div className="rrutsche-page demo-parallax">
				<Parallax bgImage="www/assets/1.jpg" strength={300} log={true}>
					<br/><br/><br/><br/>
					<h1>first parallax</h1>
					<br/>
					<br/>
					<br/><br/><br/><br/>
					<img src="http://www.fillmurray.com/400/400" alt="fill murray"/>
					<br/>
					<br/>
					<h2>filled with murray</h2>
					<br/>
				</Parallax>
				<div>
					<br/><br/><br/><br/>
					<h1>none-parallax content</h1>
					<br/>
					<h2>-------------</h2>
					<h2>because we can</h2>
					<br/><br/><br/><br/>
				</div>
				<Parallax bgImage="www/assets/2.jpg" blur={3}>
					<br/><br/><br/><br/>
					<h1>second one</h1>
					<br/>
					<br/>
					<h2>it's also filled</h2>
					<br/><br/>
					<img src="http://www.fillmurray.com/g/500/400" alt="fillmurray"/>
					<br/><br/>
				</Parallax>
				<Parallax bgColor="darkgrey">
					<br/><br/><br/><br/>
					<h1>guess</h1>
					<h1>what?</h1>
					<br/><br/><br/><br/>
				</Parallax>
				<Parallax bgImage="www/assets/3.jpg">
					<br/><br/><br/><br/>
					<h1>last one...</h1>
					<br/>
					<br/>
					<img src="http://www.fillmurray.com/g/600/500" alt="fillmurray"/>
					<br/><br/><br/><br/>
					
				</Parallax>
			</div>
		);
	}

});

module.exports = DemoParallax;