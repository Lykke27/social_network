import React, {RefObject} from "react";
import state, {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/state";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

type PropsMyPostsType = {
    posts: Array<PostType>
    // addPost: () => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    dispatch: any
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