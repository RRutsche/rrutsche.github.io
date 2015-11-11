'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Section = (function (_React$Component) {
	_inherits(Section, _React$Component);

	function Section() {
		_classCallCheck(this, Section);

		_get(Object.getPrototypeOf(Section.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'section' },
				_react2['default'].createElement(
					'div',
					{ className: 'section-inner' },
					_react2['default'].createElement(
						'div',
						{ className: 'title' },
						this.props.title
					),
					_react2['default'].createElement(
						'div',
						{ className: 'subtitle' },
						this.props.subtitle
					),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement(
						'div',
						null,
						this.props.children
					),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement(
						'a',
						{ href: this.props.demoLink },
						'Demo'
					),
					_react2['default'].createElement('br', null)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'labels' },
					this.getLabels()
				)
			);
		}
	}, {
		key: 'getLabels',
		value: function getLabels() {
			var labels = [];
			this.props.labels.forEach(function (label, index) {
				labels.push(_react2['default'].createElement(
					'div',
					{ key: 'label' + label + index, className: (0, _classnames2['default'])('label', label) },
					label
				));
			});
			return labels;
		}
	}]);

	return Section;
})(_react2['default'].Component);

exports['default'] = Section;

Section.propTypes = {
	title: _react2['default'].PropTypes.string.isRequired,
	subtitle: _react2['default'].PropTypes.string.isRequired,
	labels: _react2['default'].PropTypes.array,
	demoLink: _react2['default'].PropTypes.string.isRequired
};

Section.defaultProps = {
	labels: []
};
module.exports = exports['default'];
