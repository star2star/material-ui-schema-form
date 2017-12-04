'use strict';

jest.dontMock('../SchemaForm');
jest.dontMock('../utils');
jest.dontMock('lodash');

var React = require('react');
var TestUtils = require('react-dom/test-utils');
var ReactShallowRenderer = require('react-test-renderer/shallow');
var SchemaForm = require('../SchemaForm');

describe('SchemaForm', function () {
  it('shows SchemaForm', function () {
    var shallowRenderer = ReactShallowRenderer.createRenderer();
    var cfg = {
      form: {},
      schema: {
        'type': 'object'
      },
      model: {},
      mapper: {}
    };
    var result = shallowRenderer.render(React.createElement(SchemaForm, {
      schema: cfg.schema,
      mapper: cfg.mapper
    }));

    console.log('result = ', result.props);
    expect(result.props.children).toEqual('SchemaForm');
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;