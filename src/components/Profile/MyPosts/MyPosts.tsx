import React, {RefObject} from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";

type PropsMyPostsType = {
    posts: Array<PostType>
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const MyPosts = (props: PropsMyPostsType) => {
    let postsElements =
        props.posts.map((p) => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>);

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
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
                    <button onClick={onAddPost}>Add post</button>
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