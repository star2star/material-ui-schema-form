'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _Number = require('./Number');

var _Number2 = _interopRequireDefault(_Number);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _TextArea = require('./TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _Radios = require('./Radios');

var _Radios2 = _interopRequireDefault(_Radios);

var _Date = require('./Date');

var _Date2 = _interopRequireDefault(_Date);

var _Switch = require('./Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _Help = require('./Help');

var _Help2 = _interopRequireDefault(_Help);

var _FieldSet = require('./FieldSet');

var _FieldSet2 = _interopRequireDefault(_FieldSet);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Array from './Array';


var SchemaForm = function (_Component) {
  _inherits(SchemaForm, _Component);

  function SchemaForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SchemaForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SchemaForm.__proto__ || Object.getPrototypeOf(SchemaForm)).call.apply(_ref, [this].concat(args))), _this), _this.mapper = {
      'number': _Number2.default,
      'text': _Text2.default,
      'password': _Text2.default,
      'textarea': _TextArea2.default,
      'select': _Select2.default,
      'radios': _Radios2.default,
      'date': _Date2.default,
      'toggleswitch': _Switch2.default,
      'help': _Help2.default,
      'array': function array() {
        return _react2.default.createElement('div', null);
      }, // TODO: Implement
      'fieldset': _FieldSet2.default
    }, _this.onChange = function () {
      var _this2;

      return (_this2 = _this).__onChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.builder = function () {
      var _this3;

      return (_this3 = _this).__builder__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SchemaForm, [{
    key: '__builder__REACT_HOT_LOADER__',
    value: function __builder__REACT_HOT_LOADER__() {
      return this.__builder__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__() {
      return this.__onChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__(key, val) {
      //console.log('SchemaForm.onChange', key, val);
      this.props.onModelChange(key, val);
    }
  }, {
    key: '__builder__REACT_HOT_LOADER__',
    value: function __builder__REACT_HOT_LOADER__(form, model, index, onChange, mapper) {
      var type = form.type;
      var Field = this.mapper[type];

      if (!Field) {
        console.log('Invalid field: \"' + form.key[0] + '\"!');
        return null;
      }

      if (form.condition && eval(form.condition) === false) {
        return null;
      }

      return _react2.default.createElement(Field, {
        model: model,
        form: form,
        key: index,
        onChange: onChange,
        mapper: mapper,
        builder: this.builder
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var merged = _utils2.default.merge(this.props.schema, this.props.form, this.props.ignore, this.props.option);
      //console.log('SchemaForm merged = ', JSON.stringify(merged, undefined, 2));

      var mapper = this.mapper;
      if (this.props.mapper) {
        mapper = _lodash2.default.merge(this.mapper, this.props.mapper);
      }

      var forms = merged.map(function (form, index) {
        return _this4.builder(form, _this4.props.model, index, _this4.onChange, mapper);
      });

      return _react2.default.createElement(
        'div',
        { style: { width: '100%' }, className: 'SchemaForm ' + this.props.className },
        forms
      );
    }
  }]);

  return SchemaForm;
}(_react.Component);

module.exports = SchemaForm;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SchemaForm, 'SchemaForm', 'src/SchemaForm.js');
}();

;