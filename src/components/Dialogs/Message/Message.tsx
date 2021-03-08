import React from "react";
import { MessagesDataType } from "../../../redux/store";
import style from "../Dialogs.module.css";

const Message: React.FC<MessagesDataType> = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

export default Message;