const SEND_MESSAGE = 'SEND-MESSGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, { id: 5, message: newMessage }]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export default dialogsReducer