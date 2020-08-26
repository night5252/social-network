import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength20 = maxLengthCreator(20)

const AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea} placeholder='Enter your post' name='newPostText'
        validate={[required, maxLength20]} />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

const MyPosts = React.memo(props => {
  let postsElements = [...props.posts].reverse()
    .map(post => <Post key={post.id} post={post.post} id={post.id}
      likesCount={post.LikesCount} dislikesCount={post.DislikesCount} />)

  let onAddPost = values => {
    props.addPost(values.newPostText)
  }

  return <div className={styles.postsBlock}>
    <h3>My posts</h3>
    <AddNewPostFormRedux onSubmit={onAddPost} />
    <div className={styles.posts}>
      {postsElements}
    </div>
  </div>
})

export default MyPosts