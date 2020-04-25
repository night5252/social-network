import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Boris
                </div>
                <div className={classes.dialog}>
                    Igor
                </div>
                <div className={classes.dialog}>
                    Sergey
                </div>
                <div className={classes.dialog}>
                    Dmitrey
                </div>
                <div className={classes.dialog}>
                    Oleg
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hey</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>I`m find</div>
            </div>
        </div>
    )
}

export default Dialogs;