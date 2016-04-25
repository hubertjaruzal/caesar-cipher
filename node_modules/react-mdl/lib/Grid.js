'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cell = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _clamp = require('clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var _shadows = require('./utils/shadows');

var _shadows2 = _interopRequireDefault(_shadows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Grid = function Grid(props) {
    var noSpacing = props.noSpacing;
    var className = props.className;
    var children = props.children;
    var component = props.component;
    var shadow = props.shadow;

    var otherProps = _objectWithoutProperties(props, ['noSpacing', 'className', 'children', 'component', 'shadow']);

    var hasShadow = typeof shadow !== 'undefined';
    var shadowLevel = (0, _clamp2.default)(shadow || 0, 0, _shadows2.default.length - 1);

    var classes = (0, _classnames2.default)('mdl-grid', _defineProperty({
        'mdl-grid--no-spacing': noSpacing
    }, _shadows2.default[shadowLevel], hasShadow), className);

    return _react2.default.createElement(component || 'div', _extends({
        className: classes
    }, otherProps), children);
};

Grid.propTypes = {
    className: _react.PropTypes.string,
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),
    noSpacing: _react.PropTypes.bool,
    shadow: _react.PropTypes.number
};

/* eslint-disable react/no-multi-comp */
var Cell = function Cell(props) {
    var _classNames2;

    var align = props.align;
    var className = props.className;
    var children = props.children;
    var col = props.col;
    var phone = props.phone;
    var tablet = props.tablet;
    var component = props.component;
    var hideDesktop = props.hideDesktop;
    var hidePhone = props.hidePhone;
    var hideTablet = props.hideTablet;
    var shadow = props.shadow;

    var otherProps = _objectWithoutProperties(props, ['align', 'className', 'children', 'col', 'phone', 'tablet', 'component', 'hideDesktop', 'hidePhone', 'hideTablet', 'shadow']);

    var hasShadow = typeof shadow !== 'undefined';
    var shadowLevel = (0, _clamp2.default)(shadow || 0, 0, _shadows2.default.length - 1);

    var classes = (0, _classnames2.default)('mdl-cell', (_classNames2 = {}, _defineProperty(_classNames2, 'mdl-cell--' + col + '-col', true), _defineProperty(_classNames2, 'mdl-cell--' + phone + '-col-phone', typeof phone !== 'undefined'), _defineProperty(_classNames2, 'mdl-cell--' + tablet + '-col-tablet', typeof tablet !== 'undefined'), _defineProperty(_classNames2, 'mdl-cell--' + align, typeof align !== 'undefined'), _defineProperty(_classNames2, 'mdl-cell--hide-desktop', hideDesktop), _defineProperty(_classNames2, 'mdl-cell--hide-phone', hidePhone), _defineProperty(_classNames2, 'mdl-cell--hide-tablet', hideTablet), _defineProperty(_classNames2, _shadows2.default[shadowLevel], hasShadow), _classNames2), className);

    return _react2.default.createElement(component || 'div', _extends({
        className: classes
    }, otherProps), children);
};

Cell.propTypes = {
    align: _react.PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
    className: _react.PropTypes.string,
    col: _react.PropTypes.number.isRequired,
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),
    phone: _react.PropTypes.number,
    tablet: _react.PropTypes.number,
    hideDesktop: _react.PropTypes.bool,
    hidePhone: _react.PropTypes.bool,
    hideTablet: _react.PropTypes.bool,
    shadow: _react.PropTypes.number
};

exports.default = Grid;
exports.Cell = Cell;