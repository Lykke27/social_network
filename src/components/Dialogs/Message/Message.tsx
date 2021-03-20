import React from "react";
import style from "../Dialogs.module.css";
import {MessagesDataType} from "../../../redux/dialogs-reducer";

const Message: React.FC<MessagesDataType> = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

export default Message;