import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer, {setUsersAC, UserType} from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType


export type AppStateType = ReturnType<typeof rootReducer> //тип стейта приложения
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
export type FollowActionType = {
    type: "FOLLOW",
    userID: number
}
export type UnfollowActionType = {
    type: "UNFOLLOW",
    userID: number
}
export type SetUsersActionType = {
    type: "SET_USERS",
    users: Array<UserType>
}

let store = createStore(rootReducer);

export default store;