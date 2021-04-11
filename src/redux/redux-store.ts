import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer, {UserType} from "./users-reducer";

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
    | SetCurrentPageActionType
    | setTotalUsersCountActionType
    | SetIsFetchingActionType


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
export type SetCurrentPageActionType = {
    type: "SET_CURRENT_PAGE",
    currentPage: number
}
export type setTotalUsersCountActionType = {
    type: "SET_TOTAL_USERS_COUNT",
    totalUsers: number
}
export type SetIsFetchingActionType = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
}

let store = createStore(rootReducer);

export default store;