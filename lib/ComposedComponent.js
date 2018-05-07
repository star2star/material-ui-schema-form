function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import utils from './utils';
export default (ComposedComponent => class extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChangeValidate", e => {
      //console.log('onChangeValidate e', e);
      let value = null;

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
      } //console.log('onChangeValidate this.props.form, value', this.props.form, value);


      const validationResult = utils.validate(this.props.form, value);
      this.setState({
        value: value,
        valid: validationResult.valid,
        error: validationResult.valid ? null : validationResult.error.message
      }); //console.log('conhangeValidate this.props.form.key, value', this.props.form.key, value);

      this.props.onChange(this.props.form.key, value);
    });
  }

  componentWillMount() {
    const value = this.defaultValue(this.props);
    const validationResult = utils.validate(this.props.form, value);
    this.setState({
      value: value,
      valid: !!(validationResult.valid || !value),
      error: !validationResult.valid && value ? validationResult.error.message : null
    });
  }

  componentWillReceiveProps(nextProps) {
    const value = this.defaultValue(nextProps);
    const validationResult = utils.validate(nextProps.form, value);
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


  defaultValue(props) {
    // check if there is a value in the model, if there is, display it. Otherwise, check if
    // there is a default value, display it.
    //console.log('Text.defaultValue key', this.props.form.key);
    //console.log('Text.defaultValue model', this.props.model);
    let value = utils.selectOrSet(props.form.key, props.model); //console.log('Text defaultValue value = ', value);
    // check if there is a default value

    if (!value && props.form['default']) {
      value = props.form['default'];
    }

    if (!value && props.form.schema && props.form.schema['default']) {
      value = props.form.schema['default'];
    } // Support for Select
    // The first value in the option will be the default.


    if (!value && props.form.titleMap && props.form.titleMap[0].value) {
      value = props.form.titleMap[0].value;
    } //console.log('value', value);


    return value;
  }

  render() {
    return React.createElement(ComposedComponent, _extends({}, this.props, this.state, {
      onChangeValidate: this.onChangeValidate
    }));
  }

});