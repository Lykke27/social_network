import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsTypes, PostType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
// @ts-ignore
import {StoreContext} from "../../../StoreContext.tsx";

// type PropsType = {
//     // posts: Array<PostType>
//     // newPostText: string
//     // dispatch: (action: any) => void
//     // addPost: () => void
//     // updateNewPostText: (newText: string) => void
//     store: StoreType
// }

const MyPostsContainer = () => {
    // let state = props.store.getState()
    return (
        <StoreContext.Consumer>
            {(store:StoreType) =>
            {
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={store._state.profilePage.posts}
                                newPostText={store._state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;