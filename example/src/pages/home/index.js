import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withTheme} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/javascript/javascript');

const schemaOps = {
  mode: 'javascript',
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: false,
  lineNumbers: true
};

class HomePage extends Component {
  state = {
    schema: '',
  };

  handleSchemaChange = value => {
    this.setState({
      schema: value,
    });
  };

  render() {
    const {
      props: {
        themeState: {
          shade,
        },
      },
      state: {
        schema,
      },
    } = this;

    schemaOps.theme = (shade === 'dark')? 'material' : 'paraiso-light';

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
          <Paper style={{height: '100%'}}>
            <CodeMirror
              style={{height: 'auto'}}
              id="schemaEditor"
              value={schema}
              options={schemaOps}
              onBeforeChange={(editor, data, value) => {
                this.handleSchemaChange(value);
              }}
              onChange={(editor, data, value) => {
              }}
            />
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
              This is a stub code editor.
            </Typography>
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
