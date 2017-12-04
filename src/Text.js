import React, { Component } from 'react';
import ComposedComponent from './ComposedComponent';
import TextField from 'material-ui/TextField';

class FormText extends Component {
  render() {
    //console.log('Text props', this.props.form.readonly);
    return (
      <div className={this.props.form.htmlClass}>
        <TextField
          type={this.props.form.type}
          label={this.props.form.title}
          placeholder={this.props.form.placeholder}
          helperText={this.props.error}
          error={(this.props.error)? true : false}
          onChange={this.props.onChangeValidate}
          defaultValue={this.props.value}
          disabled={this.props.form.readonly}
          style={this.props.form.style || {width: '100%'}}
        />
      </div>
    );
  }
}

export default ComposedComponent(FormText);
