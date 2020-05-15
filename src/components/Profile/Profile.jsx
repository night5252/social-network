import React from 'react'
// import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <content>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </content>
  )
}

export default Profile