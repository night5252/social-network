import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'sociale_network/profile/ADD-POST'
const SET_USERS_PROFILE = 'sociale_network/profile/SET-USERS-PROFILE'
const SET_STATUS = 'sociale_network/profile/SET-STATUS'
const DELETE_POST = 'sociale_network/profile/DELETE-POST'

let initialState = {
    posts: [
        { id: 0, post: 'Hi, how are you?', LikesCount: '12', DislikesCount: '0' },
        { id: 1, post: 'I`ts my first post', LikesCount: '42', DislikesCount: '7' }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 2,
                post: action.newPostText,
                LikesCount: 0,
                DislikesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_USERS_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(post => post.id !== action.postId) }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer