// import * as React from 'react';
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Slider from 'material-ui/Slider';

import mui from 'material-ui';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const inputName = ({input}) => (
    <TextField
        hintText="name"
        floatingLabelText="Name"
        type="text"
        {...input}
    />
);

const inputParam1 = ({input}) => (
    <TextField
        hintText="param 1"
        floatingLabelText="Param 1"
        type="number"
        {...input}

    />
);

const param2Slider = () => (
    <div width="">
        <Slider
            min={0}
            max={100}
            step={1}
        />
    </div>
);

class NewProfileForm extends React.Component {

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="name" component={inputName} />
                </div>

                <div>
                    <Field name="param1" component={inputParam1} />
                    <br/>
                    <br/>
                </div>

                <div>
                    <Field component={param2Slider} />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

export default NewProfileForm = reduxForm({
    form: 'newProfile'
})(NewProfileForm);