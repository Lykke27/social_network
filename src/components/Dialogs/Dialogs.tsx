import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/state";

type PropsType = {
    dialogsPage: DialogsPageType
}

type DialogsPageType = {
    messagesData: Array<MessagesDataType>
    dialogsData: Array<DialogsDataType>
}


const Dialogs:React.FC<PropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map((d ) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.dialogsPage.messagesData.map((m) => <Message id ={m.id} message={m.message}/>)

    // let dialogsElements = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    // let messagesElements = props.messagesData.map((m) => <Message id ={m.id} message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;