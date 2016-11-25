// import * as React from 'react';
import React, {Component} from 'react';
import { Field, reduxForm, filterProps} from 'redux-form';
import Slider from 'material-ui/Slider';

import mui from 'material-ui';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const inputName = ({input}) => (
    <TextField
        hintText="name"
        floatingLabelText="Name"
        type="text"
        style={{
            width: '25%'
        }}
        {...input}
    />
);

const inputParam1 = ({input}) => (
    <TextField
        hintText="param 1"
        floatingLabelText="Param 1"
        type="number"
        style={{
            width: '25%'
        }}
        {...input}
    />
);

const inputParam2 = ({input}) => (
    <TextField
        hintText="param 2"
        floatingLabelText="Param 2"
        type="number"
        style={{
            width: '25%'
        }}
        {...input}
    />
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
                </div>

                <div>
                    <Field name="param2" component={inputParam2} />
                    <br/>
                    <br/>
                </div>

                <div>
                    <RaisedButton type="submit" label="submit" primary={true} />
                </div>
            </form>
        );
    }
}

export default NewProfileForm = reduxForm({
    form: 'newProfile'
})(NewProfileForm);











/*
 - получать значение слайдера и записывать его в профиль



 const param2Slider = ({input}) => (
 <div>
 <Slider
 defaultValue={0}
 min={0}
 max={10}
 step={0.1}
 style={{
 width: '25%'
 }}
 value={input.value}
 />
 </div>
 );



 */