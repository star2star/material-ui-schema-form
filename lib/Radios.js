'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _Radio = require('material-ui/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioGroup = require('material-ui/Radio/RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _Form = require('material-ui/Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormRadios = function (_Component) {
  _inherits(FormRadios, _Component);

  function FormRadios() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormRadios);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormRadios.__proto__ || Object.getPrototypeOf(FormRadios)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormRadios, [{
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(event, value) {
      var _this3 = this;

      this.setState({ value: value }, function () {
        _this3.props.onChangeValidate(event);
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        value: this.props.value
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;
      var form = this.props.form;


      var items = form.titleMap.map(function (item, index) {
        return _react2.default.createElement(_Form.FormControlLabel, {
          key: index,
          label: item.name,
          value: item.value,
          disabled: form.readonly,
          control: _react2.default.createElement(_Radio2.default, null)
        });
      });

      return _react2.default.createElement(
        'span',
        { className: form.htmlClass },
        _react2.default.createElement(
          _Form.FormControl,
          { component: 'fieldset' },
          _react2.default.createElement(
            _Form.FormLabel,
            { component: 'legend' },
            form.title
          ),
          _react2.default.createElement(
            _RadioGroup2.default,
            {
              name: form.title,
              className: classes.group,
              value: value,
              onChange: this.handleChange
            },
            items
          )
        )
      );
    }
  }]);

  return FormRadios;
}(_react.Component);

var _default = (0, _ComposedComponent2.default)(FormRadios);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FormRadios, 'FormRadios', 'src/Radios.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Radios.js');
}();

;