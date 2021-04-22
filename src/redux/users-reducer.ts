import {
    ActionsTypes,
    FollowActionType,
    SetCurrentPageActionType, SetFollowingInProgressActionType, SetIsFetchingActionType,
    SetUsersActionType,
    UnfollowActionType
} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [0]
};

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsers: action.totalUsers}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state;
    }
}

type InitialStateType = typeof initialState;

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number,
    totalUsers: number,
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<number>
}

// type UserType = typeof Users можно попробовать так

export type UserType = {
    id: number
    photoUrl: string
    name: string
    status: string
    followed: boolean
    photos: {
        small: string
        large: string
    }
    location:
        {
            city: string,
            country: string
        }
}

export const follow = (userID: number): FollowActionType => ({type: FOLLOW, userID})
export const unfollow = (userID: number): UnfollowActionType => ({type: UNFOLLOW, userID})
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE, currentPage
})
export const setTotalUsersCount = (totalUsers: number) => ({
    type: SET_TOTAL_USERS_COUNT, totalUsers
})
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING, isFetching
})
export const setFollowingInProgress = (isFetching: boolean, userID: number): SetFollowingInProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID
})

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch<any>) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
}

export default usersReducer;
