import {
    ActionsTypes,
    FollowActionType,
    SetCurrentPageActionType,
    SetUsersActionType,
    UnfollowActionType
} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1
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

export const followAC = (userID: number): FollowActionType => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number): UnfollowActionType => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE, currentPage
})
export const setTotalUsersCountAC=(totalUsers:number) => ({
    type: SET_TOTAL_USERS_COUNT, totalUsers
})

export default usersReducer;
