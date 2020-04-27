import React from 'react';
// import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <content>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </content>
  )
}

export default Profile;