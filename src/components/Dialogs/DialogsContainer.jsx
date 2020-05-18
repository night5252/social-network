// import React from 'react'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../Redux/DialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: () => {
            dispatch(sendMessageActionCreator())
        },
        sendMessage: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer