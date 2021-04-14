import {ActionsTypes} from "./redux-store";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hello!', likeCount: 5},
        {id: 2, message: "It's my first post", likeCount: 15},
        {id: 3, message: "It's my first post", likeCount: 15},
        {id: 4, message: "It's my first post", likeCount: 17},
        {id: 5, message: "It's my first post", likeCount: 0},
    ] as Array<PostType>,
    newPostText: ""
};

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
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
        default:
            return state;
    }
}
export type InitialStateType = typeof initialState;

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
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

export default profileReducer;

