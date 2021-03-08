import style from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsDataType} from "../../../redux/store";
// import {userDialogs} from "../Dialogs";


const DialogItem: React.FC<DialogsDataType> = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={"/dialogs/" + props.id}>
                <div>
                    <img src={props.avatar}/>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;