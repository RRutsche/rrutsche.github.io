import React from 'react';
import classNames from 'classnames';

export default class Section extends React.Component {

	render() {
		return (
			<div className="section">
				<div className="title">{this.props.title}</div>
				<div className="subtitle">{this.props.subtitle}</div>
				<div className="labels">{this.getLabels()}</div>
				<br/>
				<div>{this.props.children}</div>
				<br/>
				<br/>
				<a href={this.props.demoLink}>Demo</a>
			</div>
		);
	}

	getLabels() {
		let labels = [];
		this.props.labels.forEach(function(label) {
			labels.push(<div className={classNames('label', label)}>{label}</div>);
		});
		return labels;
	}
}

Section.propTypes = {
	title: React.PropTypes.string.isRequired,
	subtitle: React.PropTypes.string.isRequired,
	labels: React.PropTypes.array,
	demoLink: React.PropTypes.string.isRequired
};

Section.defaultProps = {
	labels: []
};
