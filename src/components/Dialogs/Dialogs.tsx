import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} key={d.id}
                                                                   avatar={d.avatar}/>);
    let messagesElements = state.messagesData.map((m) => <Message id={m.id} message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                <div className={style.message}>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder={"Enter your message"}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;