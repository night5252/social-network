import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET-USERS-PROFILE'
const SET_STATUS = 'SET-STATUS'

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
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data))
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export default profileReducer