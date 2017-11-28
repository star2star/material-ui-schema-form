'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var utils = require('./utils');

var _default = function _default(ComposedComponent) {
  return function (_Component) {
    _inherits(_class2, _Component);

    function _class2() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.onChangeValidate = function () {
        var _this2;

        return (_this2 = _this).__onChangeValidate__REACT_HOT_LOADER__.apply(_this2, arguments);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class2, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var value = this.defaultValue(this.props);
        var validationResult = utils.validate(this.props.form, value);
        this.setState({
          value: value,
          valid: !!(validationResult.valid || !value),
          error: !validationResult.valid && value ? validationResult.error.message : null
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var value = this.defaultValue(nextProps);
        var validationResult = utils.validate(nextProps.form, value);
        this.setState({
          value: value,
          valid: !!(validationResult.valid || !value),
          error: !validationResult.valid && value ? validationResult.error.message : null
        });
      }

      /**
       * Called when <input> value changes.
       * @param e The input element, or something.
       */

    }, {
      key: '__onChangeValidate__REACT_HOT_LOADER__',
      value: function __onChangeValidate__REACT_HOT_LOADER__(e) {
        //console.log('onChangeValidate e', e);
        var value = null;
        switch (this.props.form.schema.type) {
          case 'integer':
          case 'number':
            if (e.target.value.indexOf('.') == -1) {
              value = parseInt(e.target.value);
            } else {
              value = parseFloat(e.target.value);
            }

            if (isNaN(value)) {
              value = undefined;
            }
            break;
          case 'boolean':
            value = e.target.checked;
            break;
          case 'object':
          case 'date':
          case 'array':
            value = e;
            break;
          default:
            value = e.target.value;
        }
        //console.log('onChangeValidate this.props.form, value', this.props.form, value);
        var validationResult = utils.validate(this.props.form, value);
        this.setState({
          value: value,
          valid: validationResult.valid,
          error: validationResult.valid ? null : validationResult.error.message
        });
        //console.log('conhangeValidate this.props.form.key, value', this.props.form.key, value);
        this.props.onChange(this.props.form.key, value);
      }
    }, {
      key: 'defaultValue',
      value: function defaultValue(props) {
        // check if there is a value in the model, if there is, display it. Otherwise, check if
        // there is a default value, display it.
        //console.log('Text.defaultValue key', this.props.form.key);
        //console.log('Text.defaultValue model', this.props.model);
        var value = utils.selectOrSet(props.form.key, props.model);
        //console.log('Text defaultValue value = ', value);

        // check if there is a default value
        if (!value && props.form['default']) {
          value = props.form['default'];
        }

        if (!value && props.form.schema && props.form.schema['default']) {
          value = props.form.schema['default'];
        }

        // Support for Select
        // The first value in the option will be the default.
        if (!value && props.form.titleMap && props.form.titleMap[0].value) {
          value = props.form.titleMap[0].value;
        }
        //console.log('value', value);
        return value;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, _extends({}, this.props, this.state, { onChangeValidate: this.onChangeValidate }));
      }
    }]);

    return _class2;
  }(_react.Component);
};

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/ComposedComponent.js');
}();

;