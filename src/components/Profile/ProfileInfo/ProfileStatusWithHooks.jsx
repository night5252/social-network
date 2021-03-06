import React, { useState } from 'react'
import { useEffect } from 'react'
// import styles from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status</b><span onDoubleClick={activateEditMode}>
                        {props.status || ''}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode}
                        autoFocus={true} value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks