import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(post => <Post post={post.post} id={post.id}
      likesCount={post.LikesCount} dislikesCount={post.DislikesCount} />)

  // let newPostElement = React.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div >
  )
}
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} placeholder='Enter your post' name='newPostText' />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts