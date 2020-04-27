import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

let dialogsData = [
    { id: 0, name: 'Boris' },
    { id: 1, name: 'Igor' },
    { id: 2, name: 'Sergey' },
    { id: 3, name: 'Dmitrey' },
    { id: 4, name: 'Oleg' }
]

let messagesData = [
    { id: 0, message: 'Hey' },
    { id: 1, message: 'How are you?' },
    { id: 2, message: 'I`m find' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'yo' }
]

let dialogsElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

let messagesElements = messagesData
    .map(message => <Message message={message.message} id={message.id} />)

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;