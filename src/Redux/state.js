const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = "SEND-MESSGE"

let store = {
    _state: {
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
            ],
            newMessageText: ' '
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    _addPost() {
        let newPost = {
            id: 2,
            post: this._state.profilePage.newPostText,
            LikesCount: 0,
            DislikesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    _updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText
        this._callSubscriber(this._state)
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) { //{type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText)
        } else if (action.type === SEND_MESSAGE) {
            let newText = this._updateNewMessageText
            this._state.messagesPage.newMessageText = ' '
            this._state.messagesPage.messagesData.push({ id: 5, message: newText })
            this._callSubscriber(this._state)

        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default store
window.store = store