'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by steve on 15/09/15.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * There is no default number picker as part of Material-UI.
 * Instead, use a TextField and validate.
 */
var FormNumber = function (_Component) {
  _inherits(FormNumber, _Component);

  function FormNumber() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormNumber.__proto__ || Object.getPrototypeOf(FormNumber)).call.apply(_ref, [this].concat(args))), _this), _this.preValidationCheck = function () {
      var _this2;

      return (_this2 = _this).__preValidationCheck__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormNumber, [{
    key: '__preValidationCheck__REACT_HOT_LOADER__',
    value: function __preValidationCheck__REACT_HOT_LOADER__() {
      return this.__preValidationCheck__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        lastSuccessfulValue: this.props.value
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        lastSuccessfulValue: nextProps.value
      });
    }
  }, {
    key: 'isNumeric',
    value: function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * Prevent the field from accepting non-numeric characters.
     * @param e
     */

  }, {
    key: '__preValidationCheck__REACT_HOT_LOADER__',
    value: function __preValidationCheck__REACT_HOT_LOADER__(e) {
      if (this.isNumeric(e.target.value)) {
        this.setState({
          lastSuccessfulValue: e.target.value
        });
        this.props.onChangeValidate(e);
      } else {
        this.refs.numberField.value = this.state.lastSuccessfulValue;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.form.htmlClass },
        _react2.default.createElement(_TextField2.default, {
          type: this.props.form.type,
          label: this.props.form.title,
          placeholder: this.props.form.placeholder,
          helperText: this.props.error,
          error: this.props.error,
          onChange: this.preValidationCheck,
          value: this.state.lastSuccessfulValue,
          ref: 'numberField',
          disabled: this.props.form.readonly,
          style: this.props.form.style || { width: '100%' }
        })
      );
    }
  }]);

  return FormNumber;
}(_react.Component);

var _default = (0, _ComposedComponent2.default)(FormNumber);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FormNumber, 'FormNumber', 'src/Number.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Number.js');
}();

;