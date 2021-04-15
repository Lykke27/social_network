import {ActionsTypes, SetUserProfileActionType, UserProfileType} from "./redux-store";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState: ProfilePageType= {
    posts: [
        {id: 1, message: 'Hello!', likeCount: 5},
        {id: 2, message: "It's my first post", likeCount: 15},
        {id: 3, message: "It's my first post", likeCount: 15},
        {id: 4, message: "It's my first post", likeCount: 17},
        {id: 5, message: "It's my first post", likeCount: 0},
    ] as Array<PostType>,
    newPostText: "",
    profile: null
};

const profileReducer = (state:ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

// export type ProfilePageType =  typeof initialState
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | UserProfileType
}

export type PostType = {
    id: number
    message: string
    likeCount: number
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile: UserProfileType):SetUserProfileActionType => ({
    type: SET_USER_PROFILE, profile
})

export default profileReducer;

