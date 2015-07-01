/** Dependencies */
var Backbone = require('backbone');
var React = require('react');
Backbone.$ = require('jquery');

/** View */
var Index = require('./Index.jsx');
var Demo = require('./Demo.jsx');
var DemoParallax = require('./DemoParallax.jsx');
var NotFound = require('./NotFound.jsx');

var App = React.createClass({

	router: null,

	componentWillMount: function() {
		var Router = Backbone.Router.extend({
			routes: {
				'': this.index,
				'parallax': this.parallax,
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

	parallax: function() {
		this.setState({page: <DemoParallax router={this.router}/>});
	},

	notFound: function() {
		this.setState({page: <NotFound router={this.router}/>});
	}

});

module.exports = App;