'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Select = require('material-ui/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Menu = require('material-ui/Menu');

var _Form = require('material-ui/Form');

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uid = function uid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (a) {
    return (a ^ Math.random() * 16 >> a / 4).toString(16);
  });
};

var FormSelect = function (_React$Component) {
  _inherits(FormSelect, _React$Component);

  function FormSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormSelect.__proto__ || Object.getPrototypeOf(FormSelect)).call.apply(_ref, [this].concat(args))), _this), _this.onSelected = function () {
      var _this2;

      return (_this2 = _this).__onSelected__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormSelect, [{
    key: '__onSelected__REACT_HOT_LOADER__',
    value: function __onSelected__REACT_HOT_LOADER__() {
      return this.__onSelected__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var possibleValue = this.getModelKey(this.props.model, this.props.form.key);
      var currentValue = this.props.model !== undefined && typeof possibleValue === 'string' ? possibleValue : this.props.form.titleMap != null ? this.props.form.titleMap[0].value : '';
      this.setState({
        currentValue: currentValue
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.model && nextProps.form.key) {
        var possibleValue = this.getModelKey(nextProps.model, nextProps.form.key);
        var currentValue = nextProps.model !== undefined && typeof possibleValue === 'string' ? possibleValue : nextProps.form.titleMap != null ? nextProps.form.titleMap[0].value : '';
        this.setState({
          currentValue: currentValue
        });
      }
    }
  }, {
    key: 'getModelKey',
    value: function getModelKey(model, key) {
      if (Array.isArray(key)) {
        return key.reduce(function (cur, nxt) {
          return cur[nxt] || {};
        }, model);
      } else {
        return model[key];
      }
    }
  }, {
    key: '__onSelected__REACT_HOT_LOADER__',
    value: function __onSelected__REACT_HOT_LOADER__(event) {
      this.setState({
        currentValue: event.target.value
      });
      this.props.onChangeValidate(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var menuItems = this.props.form.titleMap.map(function (item, idx) {
        return _react2.default.createElement(
          _Menu.MenuItem,
          {
            key: idx,
            value: item.value
          },
          _react2.default.createElement(
            _Typography2.default,
            null,
            item.name
          )
        );
      });

      var theUid = uid();

      return _react2.default.createElement(
        'div',
        { className: this.props.form.htmlClass },
        _react2.default.createElement(
          _Form.FormControl,
          null,
          _react2.default.createElement(
            _Input.InputLabel,
            { htmlFor: 'dropdown-' + theUid },
            this.props.form.title
          ),
          _react2.default.createElement(
            _Select2.default,
            {
              input: _react2.default.createElement(_Input2.default, { id: 'dropdown-' + theUid }),
              value: this.state.currentValue,
              onChange: this.onSelected,
              style: { width: '150px' },
              disabled: this.props.form.readonly,
              fullWidth: true
            },
            menuItems
          )
        )
      );
    }
  }]);

  return FormSelect;
}(_react2.default.Component);

var _default = (0, _ComposedComponent2.default)(FormSelect);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(uid, 'uid', 'src/Select.js');

  __REACT_HOT_LOADER__.register(FormSelect, 'FormSelect', 'src/Select.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Select.js');
}();

;