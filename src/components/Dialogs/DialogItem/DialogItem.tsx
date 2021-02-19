import style from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsDataType} from "../../../redux/state";
// import {userDialogs} from "../Dialogs";


const DialogItem:React.FC<DialogsDataType> = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={"/dialogs/" + props.id}> <span><img src={props.avatar}/> {props.name}</span>  </NavLink>
        </div>
    )
}

export default DialogItem;