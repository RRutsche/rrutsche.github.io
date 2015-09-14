import React from 'react';

export default class Header extends React.Component {
	render() {
		let leftRight = !!this.props.left || !!this.props.right;
		return (
			<div className="header">
				{leftRight && <div className="left">{this.props.right}</div>}
				<div className="title">{this.props.title}</div>		
				{leftRight && <div className="right">{this.props.right}</div>}
			</div>
		);
	}
}
