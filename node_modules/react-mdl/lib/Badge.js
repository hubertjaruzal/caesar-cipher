'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
    className: _react.PropTypes.string,
    text: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    overlap: _react.PropTypes.bool,
    noBackground: _react.PropTypes.bool
};

var Badge = function (_React$Component) {
    _inherits(Badge, _React$Component);

    function Badge() {
        _classCallCheck(this, Badge);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Badge).apply(this, arguments));
    }

    _createClass(Badge, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var text = _props.text;
            var overlap = _props.overlap;
            var noBackground = _props.noBackground;

            // No badge if no children

            if (!_react2.default.Children.count(children)) return null;

            var element = typeof children === 'string' ? _react2.default.createElement(
                'span',
                null,
                children
            ) : _react2.default.Children.only(children);

            // No text -> No need of badge
            if (text === null || typeof text === 'undefined') return element;

            return _react2.default.cloneElement(element, {
                className: (0, _classnames2.default)(className, element.props.className, 'mdl-badge', {
                    'mdl-badge--overlap': !!overlap,
                    'mdl-badge--no-background': !!noBackground
                }),
                'data-badge': text
            });
        }
    }]);

    return Badge;
}(_react2.default.Component);

Badge.propTypes = propTypes;

exports.default = Badge;