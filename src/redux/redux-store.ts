import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer, {UserType} from "./users-reducer";
import authReducer from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
});

export type ActionsTypes =
    | AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | setTotalUsersCountActionType
    | SetIsFetchingActionType
    | SetUserProfileActionType
    | setUserDataActionType


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
export type SetUserProfileActionType = {
    type: "SET_USER_PROFILE",
    profile: UserProfileType
}
export type setUserDataActionType = {
    type: "SET_USER_DATA",
    data: SetUserDataType
}

export type SetUserDataType = {
    userId: number,
    email: string,
    login: string
}

export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

let store = createStore(rootReducer);

export default store;
