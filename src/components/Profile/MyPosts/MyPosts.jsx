import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 0, post: 'Hi, how are you?', LikesCount: '12', DislikesCount: '0' },
    { id: 1, post: 'I`ts my first post', LikesCount: '42', DislikesCount: '7' },
  ]

  let postsElements = posts
    .map(post => <Post message post={post.post} id={post.id}
      likesCount={post.LikesCount} dislikesCount={post.DislikesCount} />)

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
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
