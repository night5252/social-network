import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../Redux/state';

const Dialogs = (props) => {
    let state = props.store.getState().messagesPage
    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = state.messagesData.map(message =>
        <Message message={message.message} id={message.id} />)
    let newMessageText = state.newMessageText
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (event) => {
        let text = event.target.value
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageText}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;