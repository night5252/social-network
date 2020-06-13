import React from 'react'
// import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <content>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </content>
  )
}

export default Profile