import React from 'react'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../Redux/DialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }
    return (
        <Dialogs updateNewMessageText={onNewMessageChange}
            sendMessage={onSendMessageClick} messagesPage={state} />
    )
}

export default DialogsContainer