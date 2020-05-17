import React from 'react'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../Redux/DialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().messagesPage
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                return (
                <Dialogs updateNewMessageText={onNewMessageChange}
                    sendMessage={onSendMessageClick} messagesPage={state} />)
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer