import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {DialogsPageType, StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

type PropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<PropsType> = (props) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}/>
}

export default DialogsContainer;