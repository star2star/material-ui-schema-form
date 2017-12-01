'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _Form = require('material-ui/Form');

var _Switch = require('material-ui/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormSwitch = function (_Component) {
  _inherits(FormSwitch, _Component);

  function FormSwitch() {
    _classCallCheck(this, FormSwitch);

    return _possibleConstructorReturn(this, (FormSwitch.__proto__ || Object.getPrototypeOf(FormSwitch)).apply(this, arguments));
  }

  _createClass(FormSwitch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          form = _props.form,
          value = _props.value,
          onChangeValidate = _props.onChangeValidate;


      return _react2.default.createElement(
        'div',
        { className: form.className },
        _react2.default.createElement(_Form.FormControlLabel, {
          control: _react2.default.createElement(_Switch2.default, {
            name: form.key.slice(-1)[0],
            value: form.key.slice(-1)[0],
            checked: value || false,
            disabled: form.readonly,
            onChange: function onChange(e, checked) {
              onChangeValidate(e);
            }
          }),
          label: form.title
        })
      );
    }
  }]);

  return FormSwitch;
}(_react.Component);

var _default = (0, _ComposedComponent2.default)(FormSwitch);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FormSwitch, 'FormSwitch', 'src/Switch.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Switch.js');
}();

;