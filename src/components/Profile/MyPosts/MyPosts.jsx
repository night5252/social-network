import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' likesCount='12' dislikesCount='0'/>
        <Post message='I`ts my first post' likesCount='42' dislikesCount='7'/>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;
