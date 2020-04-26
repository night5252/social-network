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

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Boris' id='1' />
                <DialogItem name='Igor' id='2' />
                <DialogItem name='Sergey' id='3' />
                <DialogItem name='Dmitrey' id='4' />
                <DialogItem name='Oleg' id='5' />
            </div>
            <div className={classes.messages}>
                <Message message='Hey' />
                <Message message='How are you?' />
                <Message message='I`m find' />
            </div>
        </div>
    )
}

export default Dialogs;