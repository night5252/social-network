import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer'
// import React from 'react'
// import { render } from '@testing-library/react'
// import App from './App'

let state = {
    posts: [
        { id: 0, post: 'Hi, how are you?', LikesCount: '12', DislikesCount: '0' },
        { id: 1, post: 'I`ts my first post', LikesCount: '42', DislikesCount: '7' }
    ]
}
it('length of posts should be incremented', () => {
    //1.test date
    let action = addPostActionCreator('test text')
    //2.action
    let newState = profileReducer(state, action)
    //3.expectation
    expect(newState.posts.length).toBe(3)
})

it('message of new post should be correct', () => {
    //1.test date
    let action = addPostActionCreator("test text")
    //2.action
    let newState = profileReducer(state, action)
    //3.expectation
    expect(newState.posts[2].post).toBe("test text")
})

describe('delete action', () => {
    it('should decrement lenght of posts', () => {
        //1.test date
        let action = deletePost(1)
        //2.action
        let newState = profileReducer(state, action)
        //3.expectation
        expect(newState.posts.length).toBe(1)
    })

    it(`shouldn't decrement lenght if id is incorrect`, () => {
        //1.test date
        let action = deletePost(1000)
        //2.action
        let newState = profileReducer(state, action)
        //3.expectation
        expect(newState.posts.length).toBe(2)
    })
})