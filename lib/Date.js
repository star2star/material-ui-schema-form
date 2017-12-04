'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _Form = require('material-ui/Form');

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var utils = require('./utils');
var classNames = require('classnames');

var DatePicker = function DatePicker(props) {
		return {
				render: function render() {
						var label = props.label,
						    dateFormat = props.dateFormat,
						    onChange = props.onChange,
						    disabled = props.disabled,
						    style = props.style;


						return _react2.default.createElement(_reactDatetime2.default, {
								label: label,
								renderInput: this.renderInput,
								dateFormat: dateFormat || 'YYYY-MM-DD',
								timeFormat: false,
								onChange: onChange,
								inputProps: {
										disabled: disabled,
										style: style
								}
						});
				},
				renderInput: function renderInput(inputProps, openCalendar) {
						function clear() {
								inputProps.onChange({ target: { value: '' } });
						}

						var id = props.id,
						    label = props.label;


						return _react2.default.createElement(
								_Form.FormControl,
								null,
								_react2.default.createElement(
										_Input.InputLabel,
										{ htmlFor: id },
										label
								),
								_react2.default.createElement(_Input2.default, _extends({}, inputProps, {
										id: id,
										onClick: openCalendar
								}))
						);
				}
		};
};

var FormDate = function (_Component) {
		_inherits(FormDate, _Component);

		function FormDate() {
				_classCallCheck(this, FormDate);

				return _possibleConstructorReturn(this, (FormDate.__proto__ || Object.getPrototypeOf(FormDate)).apply(this, arguments));
		}

		_createClass(FormDate, [{
				key: 'render',
				value: function render() {
						var _props = this.props,
						    form = _props.form,
						    value = _props.value,
						    onChangeValidate = _props.onChangeValidate;


						return _react2.default.createElement(
								'div',
								{ style: { width: '100%', display: 'block' }, className: form.htmlClass },
								_react2.default.createElement(DatePicker, {
										id: form.key.slice(-1)[0],
										label: form.title,
										onChange: onChangeValidate,
										value: value,
										disabled: form.readonly,
										style: form.style || { width: '100%' }
								})
						);
				}
		}]);

		return FormDate;
}(_react.Component);

var _default = (0, _ComposedComponent2.default)(FormDate);

exports.default = _default;
;

var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
				return;
		}

		__REACT_HOT_LOADER__.register(DatePicker, 'DatePicker', 'src/Date.js');

		__REACT_HOT_LOADER__.register(FormDate, 'FormDate', 'src/Date.js');

		__REACT_HOT_LOADER__.register(_default, 'default', 'src/Date.js');
}();

;