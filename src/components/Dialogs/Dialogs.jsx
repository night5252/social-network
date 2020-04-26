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

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
                <Message message={messagesData[2].message} id={messagesData[2].id} />
                <Message message={messagesData[3].message} id={messagesData[3].id} />
                <Message message={messagesData[4].message} id={messagesData[4].id} />
            </div>
        </div>
    )
}

export default Dialogs;