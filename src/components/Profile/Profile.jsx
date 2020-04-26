import React from 'react';
// import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <content>
      <ProfileInfo />
      <MyPosts />
    </content>
  )
}

export default Profile;
