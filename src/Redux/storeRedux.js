import { createStore, combineReducers } from "redux"
import dialogsReducer from "./DialogsReducer"
import profileReducer from "./ProfileReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
})
let store = createStore(reducers)

export default store