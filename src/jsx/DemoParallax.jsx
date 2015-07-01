var React = require('react');
var Parallax = require('react-parallax');

var DemoParallax = React.createClass({

	render: function() {

		return (
			<div className="rrutsche-page demo-parallax">
				<Parallax bgImage="www/assets/1.jpg" strength={300} log={true}>
					<br/><br/><br/><br/>
					<h1>first parallax</h1>
					<h2>with some crazy text that describes: nothing!</h2>
					<br/>
					<h2>it's just there</h2>
					<br/><br/><br/><br/>

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
					<h1>its the third</h1>
					<h2>text just has to fill the container to make the image visible</h2>
					<br/>
					<br/>
					<h2>it's just there</h2>
					<br/><br/><br/><br/>
					
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
					<h2>one more placeholder</h2>
					<br/>
					<br/>
					<h2>empty</h2>
					<br/><br/><br/><br/>
					
				</Parallax>
			</div>
		);
	}

});

module.exports = DemoParallax;