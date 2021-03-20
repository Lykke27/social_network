import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// @ts-ignore
import {StoreContext} from "../../StoreContext.tsx";
import {StoreType} from "../../redux/store";

const DialogsContainer = () => {
    return (<StoreContext.Consumer>
            {(store:StoreType)=> {
                let state = store.getState().dialogsPage;
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                return <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
                         sendMessage={onSendMessageClick}
                         dialogsPage={state}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;