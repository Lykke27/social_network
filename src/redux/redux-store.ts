import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    sidebar: sidebarReducer,
});

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType

export type AppStateType= ReturnType<typeof rootReducer> //тип стейта приложения
export type AddPostActionType = {
    type: "ADD_POST"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}
export type UpdateNewMessageBodyActionType = {
    type: "UPDATE_NEW_MESSAGE_BODY"
    body: string
}
export type SendMessageActionType = {
    type: "SEND_MESSAGE"
}

let store = createStore(rootReducer);

export default store;