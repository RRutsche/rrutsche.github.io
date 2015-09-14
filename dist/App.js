/** Dependencies */
'use strict';

var Backbone = require('backbone');
var React = require('react');
Backbone.$ = require('jquery');

/** View */
var Index = require('./Index.jsx');
var DemoParallax = require('./DemoParallax.jsx');
var NotFound = require('./NotFound.jsx');

var App = React.createClass({
	displayName: 'App',

	router: null,

	componentWillMount: function componentWillMount() {
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

	getInitialState: function getInitialState() {
		return {
			page: null
		};
	},

	render: function render() {
		return this.state.page;
	},

	routeBack: function routeBack() {
		window.history.back();
	},

	/**************** ROUTES *********************/

	index: function index() {
		this.setState({ page: React.createElement(Index, { router: this.router }) });
	},

	parallax: function parallax() {
		this.setState({ page: React.createElement(DemoParallax, { router: this.router }) });
	},

	notFound: function notFound() {
		this.setState({ page: React.createElement(NotFound, { router: this.router }) });
	}

});

module.exports = App;
