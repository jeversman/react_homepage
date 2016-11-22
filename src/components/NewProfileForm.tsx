// import * as React from 'react';
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class NewProfileForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <div>
                        <Field name="name" component="input" type="text" placeholder="name"/>
                    </div>
                </div>
                <div>
                    <label>Param 1</label>
                    <div>
                        <Field name="param1" component="input" type="number" placeholder="1"/>
                    </div>
                </div>
                <div>
                    <button type="submit"> Submit </button>
                </div>
            </form>
        );
    }
}

NewProfileForm = reduxForm({
    form: 'newProfile'
})(NewProfileForm);

export default NewProfileForm;