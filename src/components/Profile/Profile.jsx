import React from 'react'
// import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { Redirect } from 'react-router-dom'

const Profile = (props) => {
  if (props.isAuth === false) return <Redirect to='/Login' />
  return (
    <content>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </content>
  )
}

export default Profile