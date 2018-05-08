# Material UI Schema Form

View [live demo]( )!

# material-ui-schema-form

This library is an ongoing re-write of Network New Technologies' [react-schema-form](https://github.com/networknt/react-schema-form).

**Why re-write?**

Jeanlescure's `material-ui-schema-form` was the best react json schma form library for our needs, but changes needed to be made to fit our needs. 
The original library had side effects resulting from the use of asynchronus setState. We have update all instances of setState to use react's best practices.
The original library did not have issues open, but ours does. So feel free to report anything you find. 

# Installation

```sh
npm install s2s-react-schema-form --save
```


# Usage

```js

import { SchemaForm } from "s2s-react-schema-form";

<SchemaForm schema={this.state.schema} form={this.state.form} model={this.props.model} onModelChange={this.props.onModelChange} />

```

# Form format

React-schema-form implements the form format as defined by the json-schema-form standard.

The documentation for that format is located at the [json-schema-form wiki](https://github.com/json-schema-form/json-schema-form/wiki/Documentation).

# Customization

s2s-react-schema-form provides most fields including FieldSet and Array and they might cover most use cases; however, you might have requirement that needs something that is not built in. In this case, you
can implement your own field and inject it into the generic mapper for the builder to leverage your component. By passing a mapper as a props to the SchemaForm, you can replace built in component with
yours or you can define a brand new type and provide your component to render it.

[react-schema-form-rc-select](https://github.com/networknt/react-schema-form-rc-select) is an example to provide multiple select to the react schema form.

```js
require('rc-select/assets/index.css');
import RcSelect from 'react-schema-form-rc-select/lib/RcSelect';
...

        var mapper = {
            "rc-select": RcSelect
        };

        var schemaForm = '';
        if (this.state.form.length > 0) {
            schemaForm = (
                <SchemaForm schema={this.state.schema} form={this.state.form} model={this.state.model} onModelChange={this.onModelChange} mapper={mapper} />
            );
        }


```

# License

MIT Licensed.
