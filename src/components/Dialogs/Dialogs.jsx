import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'

const Dialogs = (props) => {
    let state = props.messagesPage

    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesElements = state.messagesData.map(message =>
        <Message message={message.message} key={message.id} id={message.id} />)
    let newMessageText = state.newMessageText

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (event) => {
        let text = event.target.value
        props.updateNewMessageText(text)
    }

    if (props.isAuth === false) return <Redirect to='/Login' />

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

export default Dialogs