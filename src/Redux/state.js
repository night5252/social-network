import { rerenderEtireTree } from "../render"

let state = {

    profilePage: {
        posts: [
            { id: 0, post: 'Hi, how are you?', LikesCount: '12', DislikesCount: '0' },
            { id: 1, post: 'I`ts my first post', LikesCount: '42', DislikesCount: '7' }
        ],
        newPostText: 'Your post'
    },

    messagesPage: {
        dialogsData: [
            { id: 0, name: 'Boris' },
            { id: 1, name: 'Igor' },
            { id: 2, name: 'Sergey' },
            { id: 3, name: 'Dmitrey' },
            { id: 4, name: 'Oleg' }
        ],
        messagesData: [
            { id: 0, message: 'Hey' },
            { id: 1, message: 'How are you?' },
            { id: 2, message: 'I`m find' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'yo' }
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 2,
        post: state.profilePage.newPostText,
        LikesCount: 0,
        DislikesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEtireTree(state)
}

export let updateNewPostText = (newText) => {
        state.profilePage.newPostText  = newText 
        rerenderEtireTree(state)
}
export default state