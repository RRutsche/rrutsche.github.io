/** Dependencies */
var Backbone = require('backbone');
var React = require('react');
Backbone.$ = require('jquery');

/** View */
var Index = require('./Index.jsx');

var App = React.createClass({

	router: null,

	componentWillMount: function() {
		var Router = Backbone.Router.extend({
			routes: {
				'': this.index,
				'demo': this.demo,
				'*notFound': this.notFound
			}
		});
		this.router = new Router();
		Backbone.history.start();
	},

	getInitialState: function() {
		return {
			page: null
		};
	},

	render: function() {
		return this.state.page;
	},

	routeBack: function() {
		window.history.back();
	},


	/**************** ROUTES *********************/

	index: function() {
		this.setState({page: <Index router={this.router}/>});
	},

	demo: function() {
		this.setState({page: <Demo router={this.router}/>});
	},

	notFound: function() {
		this.setState({page: <NotFound router={this.router}/>});
	}

});

module.exports = App;