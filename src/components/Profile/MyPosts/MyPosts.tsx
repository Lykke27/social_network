import React, {RefObject} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";

type PropsMyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: any
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}


const MyPosts = (props: PropsMyPostsType) => {
    let postsElements =
        props.posts.map((p) => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>);

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    let addPost = () => {
        if (newPostElement.current) {
            // let text = newPostElement.current.value
            props.dispatch(addPostActionCreator())
            // newPostElement.current.value = '';
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = updateNewPostTextActionCreator(text);
            props.dispatch(action); //не забываем про newText!!
        }
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;