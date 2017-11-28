import React from 'react';
import ComposedComponent from './ComposedComponent';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

class FormSelect extends React.Component {
  componentWillMount() {
    const possibleValue = this.getModelKey(this.props.model, this.props.form.key);
    this.setState({
      currentValue: this.props.model !== undefined && possibleValue ? possibleValue : this.props.form.titleMap != null ? this.props.form.titleMap[0].value : '',
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.model && nextProps.form.key) {
      this.setState({
        currentValue: this.getModelKey(nextProps.model, nextProps.form.key)
        || (nextProps.form.titleMap != null ? nextProps.form.titleMap[0].value : '')
      });
    }
  }

  getModelKey(model, key) {
    if (Array.isArray(key)) {
      return key.reduce((cur, nxt) => (cur[nxt] || {}), model);
    } else {
      return model[key];
    }
  }

  onSelected = (event, selectedIndex, menuItem) => {
    this.setState({
      currentValue: menuItem
    });
    event.target.value = menuItem;
    this.props.onChangeValidate(event);
  };

  render() {
    const menuItems = this.props.form.titleMap.map((item, idx) => (
      <MenuItem
      	key={idx}
        value={item.value}
      >
      	{item.name}
      </MenuItem>
    ));

    return (
      <div className={this.props.form.htmlClass}>
        <FormControl>
        <InputLabel htmlFor="period-dropdown">{this.props.form.title}</InputLabel>
        <Select
          input={<Input id="period-dropdown" />}
          value={this.state.currentValue}
          onChange={this.onSelected}
          style={{width: '150px'}}
          disabled={this.props.form.readonly}
          fullWidth
        >
          {menuItems}
        </Select>
        </FormControl>
      </div>
    );
  }
}

export default ComposedComponent(FormSelect);
