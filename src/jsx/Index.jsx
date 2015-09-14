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
							<div>The project lives on <a href="https://github.com/RRutsche/react-parallax">github</a> and is published on <a href="https://www.npmjs.com/package/react-parallax">npm</a>. 
							Suggestions and critique are welcome.</div>
					</Section>
				</div>
			</div>
		);
	}
}