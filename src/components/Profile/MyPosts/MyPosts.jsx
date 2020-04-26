import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    { id: 0, post: 'Hi, how are you?', LikesCount: '12', DislikesCount: '0' },
    { id: 1, post: 'I`ts my first post', LikesCount: '42', DislikesCount: '7' },
  ]
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message={postData[0].post} likesCount={postData[0].LikesCount} dislikesCount={postData[0].DislikesCount} />
        <Post message={postData[1].post} likesCount={postData[1].LikesCount} dislikesCount={postData[1].DislikesCount} />
      </div>
    </div>
  )
}

export default MyPosts;
