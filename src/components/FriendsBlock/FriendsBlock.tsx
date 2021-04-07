import React from "react";
import s from './FriendsBlock.module.css';

const FriendsBlock = () => {
    return(
        <div className={s.friendsBlock}>
            <div className={s.friend}>
                <img src="https://img.icons8.com/bubbles/2x/user-male.png" alt=""/>
                Friend Online 1
            </div>
            <div className={s.friend}>
                <img src="https://img.icons8.com/bubbles/452/freddie-mercury.png" alt=""/>
                Friend Online 2
            </div>
            <div className={s.friend}>
                <img src="https://i.pinimg.com/originals/dd/fc/b8/ddfcb8662d5146d1ac824b1ea81ff5e2.png" alt=""/>Friend Online 3
            </div>
        </div>
    );
}
export default FriendsBlock;