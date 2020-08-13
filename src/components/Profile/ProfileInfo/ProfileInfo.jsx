import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/image/user_png.jpg'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <content>
      <div className={styles.descriptionBlock}>
        <img alt='ava' src={profile.photos.large || userPhoto}
          className={styles.mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </content>
  )
}

export default ProfileInfo