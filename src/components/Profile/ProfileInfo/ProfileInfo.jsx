import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <content>
      <div>
        {/* <img alt='background' src='https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae' /> */}
      </div>
      <div className={styles.descriptionBlock}>
        <img alt='ava' src={props.profile.photos.large} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </content>
  )
}

export default ProfileInfo