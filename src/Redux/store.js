import profileReducer from "./ProfileReducer"
import dialogsReducer from "./DialogsReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, post: 'Hi, how are you?', LikesCount: '12', DislikesCount: '0' },
                { id: 1, post: 'I`ts my first post', LikesCount: '42', DislikesCount: '7' }
            ],
            newPostText: ''
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
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)

    }
}

export default store
window.store = store