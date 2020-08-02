import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength20 = maxLengthCreator(20)
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} placeholder='Enter your post' name='newPostText'
          validate={[required, maxLength20]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

const MyPosts = React.memo(props => {

  let postsElements = props.posts.map(post => <Post post={post.post} id={post.id}
    likesCount={post.LikesCount} dislikesCount={post.DislikesCount} />)

  let onAddPost = values => {
    props.addPost(values.newPostText)
  }

  return <div className={classes.postsBlock}>
    <h3>My posts</h3>
    <AddNewPostFormRedux onSubmit={onAddPost} />
    <div className={classes.posts}>
      {postsElements}
    </div>
  </div>
})

export default MyPosts