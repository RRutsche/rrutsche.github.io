import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';

export default class Index extends React.Component {
	render() {
		return (
			<div className="rrutsche-page index">
				<Header title="rrutsche.github.io"/>
				<div className="content">
					<Section title="react-parallax" 
							subtitle="A React Component for parallax effect."
							labels={['react', 'js', 'npm']}
							demoLink="#parallax">
							<div>Any HTML content can be passed and displayed like in a normal <code>div</code> container. Additionally a background image can be defined which then will be translated while scrolling to get a parallax effect.</div>
							<div>Published on <a href="https://github.com/RRutsche/react-parallax">github</a> and <a href="https://www.npmjs.com/package/react-parallax">npm</a>.</div>
					</Section>
				</div>
			</div>
		);
	}
}