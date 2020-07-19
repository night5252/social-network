import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} 
                placeholder='Enter your message' name="newMessageText" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm);