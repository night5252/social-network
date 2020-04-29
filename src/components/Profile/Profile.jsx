import React from 'react'
// import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <content>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} 
      newPostText={props.state.newPostText}
      updateNewPostText={props.updateNewPostText}
      addPost={props.addPost}/>
    </content>
  )
}

export default Profile