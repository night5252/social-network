import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img alt="avatar" src='https://i.pinimg.com/236x/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c--logo-inspiration-avatar.jpg' />
      {props.post}
      <div>
        <span> like </span> {props.likesCount}
        <span> dislike </span> {props.dislikesCount}
      </div>
    </div>
  )
}

export default Post;
