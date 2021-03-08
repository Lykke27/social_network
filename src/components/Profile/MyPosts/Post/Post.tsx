import React from "react";
import s from "./Post.module.css";
import {PostType} from "../../../../redux/store";


const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://sun9-62.userapi.com/impg/pRq93id7A8CTtID_fNLO9QGE-rU-hzNfAx4_Kg/4qE8UsTUo98.jpg?size=400x0&quality=96&crop=1,1,959,959&sign=be4486f2eca062adaf9fcb8c45418e0d&ava=1"/>
            {props.message}
            <div>
                <span>Like </span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post;