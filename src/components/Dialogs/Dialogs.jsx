import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {
    let state = props.messagesPage

    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesElements = state.messagesData.map(message =>
        <Message message={message.message} key={message.id} id={message.id} />)
    // let newMessageText = state.newMessageText

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }

    if (props.isAuth === false) return <Redirect to='/Login' />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name='newMessageText'
                    placeholder='Enter your message' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({ form: 'DialogAddMessageForm' })(AddMessageForm)

export default Dialogs