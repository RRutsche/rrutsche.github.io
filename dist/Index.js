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

var _HeaderJsx = require('./Header.jsx');

var _HeaderJsx2 = _interopRequireDefault(_HeaderJsx);

var _SectionJsx = require('./Section.jsx');

var _SectionJsx2 = _interopRequireDefault(_SectionJsx);

var Index = (function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index() {
		_classCallCheck(this, Index);

		_get(Object.getPrototypeOf(Index.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Index, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'rrutsche-page index' },
				_react2['default'].createElement(_HeaderJsx2['default'], { title: 'rrutsche.github.io' }),
				_react2['default'].createElement(
					'div',
					{ className: 'content' },
					_react2['default'].createElement(
						_SectionJsx2['default'],
						{ title: 'react-parallax',
							subtitle: 'A React Component for parallax effect.',
							labels: ['react', 'js', 'npm'],
							demoLink: '#parallax' },
						_react2['default'].createElement(
							'div',
							null,
							'Any HTML content can be passed and displayed like in a normal ',
							_react2['default'].createElement(
								'code',
								null,
								'div'
							),
							' container. Additionally a background image can be defined which then will be translated while scrolling to get a parallax effect.'
						),
						_react2['default'].createElement(
							'div',
							null,
							'Published on ',
							_react2['default'].createElement(
								'a',
								{ href: 'https://github.com/RRutsche/react-parallax' },
								'github'
							),
							' and ',
							_react2['default'].createElement(
								'a',
								{ href: 'https://www.npmjs.com/package/react-parallax' },
								'npm'
							),
							'.'
						)
					)
				)
			);
		}
	}]);

	return Index;
})(_react2['default'].Component);

exports['default'] = Index;
module.exports = exports['default'];
