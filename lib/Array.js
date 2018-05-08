function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import utils from "./utils";
import ComposedComponent from "./ComposedComponent";
import Button from "material-ui/Button";
import _ from "lodash";
import IconButton from "material-ui/IconButton";

class FormArray extends Component {
  constructor(props) {
    super(props);

    _defineProperty(_defineProperty(_defineProperty(_defineProperty(this, "state", {
      model: utils.selectOrSet(this.props.form.key, this.props.model) || []
    }), "updateModel", newModel => {
      this.props.onChangeValidate(newModel);
    }), "onAppend", () => {
      // console.log('onAppend is called this.state.model', this.state.model);
      let empty = {};

      if (this.props.form && this.props.form.schema && this.props.form.schema.items) {
        const items = this.props.form.schema.items;

        if (items.type && items.type.indexOf("object") !== -1) {
          // Check for possible defaults
          if (!this.props.options || this.props.options.setSchemaDefaults !== false) {
            empty = typeof items.default !== "undefined" ? items.default : empty; // Check for defaults further down in the schema.
            // If the default instance sets the new array item to something falsy, i.e. null
            // then there is no need to go further down.

            if (empty) {
              utils.traverseSchema(items, (prop, path) => {
                if (typeof prop.default !== "undefined") {
                  utils.selectOrSet(path, empty, prop.default);
                }
              });
            }
          }
        } else if (items.type && items.type.indexOf("array") !== -1) {
          empty = [];

          if (!this.props.options || this.props.options.setSchemaDefaults !== false) {
            empty = items.default || empty;
          }
        } else {
          // No type? could still have defaults.
          if (!this.props.options || this.props.options.setSchemaDefaults !== false) {
            empty = items.default || empty;
          }
        }
      }

      this.setState(prevState => {
        const newModel = [...prevState.model];
        newModel.push(empty);
        this.updateModel(newModel);
        return {
          model: newModel
        };
      }); // console.log('After append this.state.model', newModel);
    }), "onDelete", index => {
      // console.log('onDelete is called', index);
      this.setState(prevState => {
        const newModel = prevState.model;
        newModel.splice(index, 1);
        this.updateModel(newModel);
        return {
          model: newModel
        };
      });
    });

    this.updateModel = this.updateModel.bind(this);
  }

  componentDidMount() {
    // Always start with one empty form unless configured otherwise.
    if (this.props.form.startEmpty !== true && this.state.model.length === 0) {
      this.onAppend();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.model && nextProps.form && nextProps.form.key) {
      this.setState(() => {
        return {
          model: utils.selectOrSet(nextProps.form.key, nextProps.model)
        };
      });
    }
  }

  setIndex(index) {
    return function (form) {
      if (form.key) {
        form.key[form.key.indexOf("")] = index;
      }
    };
  }

  copyWithIndex(form, index) {
    const copy = _.cloneDeep(form);

    copy.arrayIndex = index;
    utils.traverseForm(copy, this.setIndex(index));
    return copy;
  }

  render() {
    // console.log('FormArray.render', this.props.form.items, this.props.model, this.state.model);
    const arrays = [];
    const fields = [];
    const {
      model
    } = this.state;
    const {
      form,
      builder,
      onChange,
      mapper
    } = this.props; // console.log('fields', fields);

    for (let i = 0; i < model.length; i++) {
      const boundOnDelete = this.onDelete.bind(this, i);
      const forms = form.items.map((form, index) => {
        const copy = this.copyWithIndex(form, i);
        return builder(copy, this.props.model, index, onChange, mapper, builder);
      }); // console.log('forms', i, forms);

      arrays.push(React.createElement("li", {
        key: i,
        className: "list-group-item"
      }, React.createElement("div", {
        style: {
          display: "flex"
        }
      }, forms, React.createElement(IconButton, {
        onClick: boundOnDelete
      }, "clear"))));
    }

    return React.createElement("div", null, React.createElement("div", null, React.createElement("label", {
      className: "control-lable"
    }, form.title), React.createElement("ol", {
      className: "list-group"
    }, arrays)), React.createElement(Button, {
      variant: "raised",
      onClick: this.onAppend,
      color: "primary"
    }, form.add || "Add"));
  }

}

export default ComposedComponent(FormArray);