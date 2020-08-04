const SEND_MESSAGE = 'sociale_network/dialogs/SEND-MESSGE'

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageText
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 5, message: newMessage }]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageText) =>
    ({ type: SEND_MESSAGE, newMessageText })
export default dialogsReducer