import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withTheme} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {SchemaForm, utils} from 'material-ui-schema-form';
import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/javascript/javascript');

import data from './data';

const codeMirrorOps = {
  mode: 'javascript',
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: false,
  lineNumbers: true
};

class HomePage extends Component {
  state = {
    schema: JSON.parse(data.schema),
    form: JSON.parse(data.form),
    model: {},
    schemaJson: data.schema,
    formJson: data.form,
    validationResult: {},
  };

  handleSchemaChange = value => {
    this.setState({
      schemaJson: value,
      schema: JSON.parse(value),
    });
  };

  handleFormChange = value => {
    this.setState({
      formJson: value,
      form: JSON.parse(value),
    });
  };

  onValidate = () => {
      console.log('ExamplePage.onValidate is called');
      let result = utils.validateBySchema(this.state.schema, this.state.model);
      this.setState({ validationResult: result });
  };

  onModelChange = (key, val) => {
      console.log('ExamplePage.onModelChange:', key, val);
      let newModel = this.state.model;
      utils.selectOrSet(key, newModel, val);
      this.setState({ model: newModel });
  };

  render() {
    const {
      onValidate,
      onModelChange,
      handleSchemaChange,
      handleFormChange,
      props: {
        themeState: {
          shade,
        },
      },
      state: {
        schemaJson,
        formJson,
        schema,
        form,
        model,
        validationResult,
      },
    } = this;

    codeMirrorOps.theme = (shade === 'dark')? 'material' : 'paraiso-light';

    let schemaForm = '';
    let modelPre = '';
    let validationPre = '';

    if (form.length > 0) {
      schemaForm = (
        <SchemaForm schema={schema} form={form} model={model} onModelChange={onModelChange} />
      );
      modelPre = (
        <div>
          <pre style={{whiteSpace: 'pre-wrap'}}>{JSON.stringify(model)}</pre>
        </div>
      );
      validationPre = (
        <div>
          <Button raised onClick={onValidate}>Validate</Button>
          <pre style={{whiteSpace: 'pre-wrap'}}>{JSON.stringify(validationResult,undefined,2,2)}</pre>
        </div>
      );
    }

    return (
      <div style={{
        display:'flex',
        height: '100%',
      }}>
        <div style={{
          flex: '1',
          paddingRight: '10px',
          height: '100%',
        }}>
          <Paper style={{
            height: '100%',
            padding: '10px',
          }}>
            <Typography type="headline" component="h3">
              Schema JSON
            </Typography>
            <div style={{height: 'calc(50% - 32px)'}}>
              <CodeMirror
                style={{height: 'auto'}}
                id="schemaEditor"
                value={schemaJson}
                options={codeMirrorOps}
                onBeforeChange={(editor, data, value) => {
                  handleSchemaChange(value);
                }}
                onChange={(editor, data, value) => {
                }}
              />
            </div>
            <hr/>
            <Typography type="headline" component="h3">
              Form JSON
            </Typography>
            <div style={{height: 'calc(50% - 50px)'}}>
              <CodeMirror
                style={{height: 'auto'}}
                id="formEditor"
                value={formJson}
                options={codeMirrorOps}
                onBeforeChange={(editor, data, value) => {
                  handleFormChange(value);
                }}
                onChange={(editor, data, value) => {
                }}
              />
            </div>
          </Paper>
        </div>
        <div style={{
          flex: '1',
          height: '100%',
        }}>
          <Paper style={{
            height: '100%',
            padding: '10px',
          }}>
            <Typography type="headline" component="h3">
              Generated Form
            </Typography>
            {schemaForm}
            <Typography type="headline" component="h3">
              Entered Values Model
            </Typography>
            {modelPre}
            <Typography type="headline" component="h3">
              Validation Result
            </Typography>
            {validationPre}
          </Paper>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    themeState: state.themeRedux,
  };
}

export default connect(
  mapStateToProps,
)(
  HomePage
);
