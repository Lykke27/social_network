import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";

export type StoreType = {
    _state: StateType,
    _callSubscriber: (_state: StateType) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!', likeCount: 5},
                {id: 2, message: "It's my first post", likeCount: 15},
                {id: 3, message: "It's my first post", likeCount: 15},
                {id: 4, message: "It's my first post", likeCount: 17},
                {id: 5, message: "It's my first post", likeCount: 0},
            ],
            newPostText: "HelloBoi"
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Че как?'},
                {id: 3, message: 'йоу бро))'},
                {id: 4, message: 'йоу'}
            ],
            dialogsData: [
                {
                    id: 1,
                    name: 'Вася',
                    avatar: 'https://davepagurek.com/wp-content/uploads/2010/06/TrollFace-150x150.gif'
                },
                {
                    id: 2,
                    name: 'Сергей',
                    avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWY0YmQ3YTYtZjc2My00NTE4LTliODEtYmRmZDQwY2UzZmM5XC9kMjZ5ZXIxLTQyMWJiNWI4LTlmYzItNGQ1YS1iMmQxLTFlMWY4MWIyNmI4Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NGftGliwoCe62wFfNDfOvJS1OHr-DpDAcGBBHsyT4MU'
                },
                {id: 3, name: 'Петя', avatar: 'https://estnn.com/wp-content/uploads/2018/08/CSGO-150x150.png'},
                {
                    id: 4,
                    name: 'Катя',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU76yRpDscFUVMSRBNy6mUvRZJg5KxftYE4w&usqp=CAU'
                }
            ],
            newMessageBody: ""
        },
        friendsPage: {
            friendsData: [
                {
                    id: 1,
                    name: 'Вася',
                    avatar: 'https://davepagurek.com/wp-content/uploads/2010/06/TrollFace-150x150.gif'
                },
                {
                    id: 2,
                    name: 'Сергей',
                    avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWY0YmQ3YTYtZjc2My00NTE4LTliODEtYmRmZDQwY2UzZmM5XC9kMjZ5ZXIxLTQyMWJiNWI4LTlmYzItNGQ1YS1iMmQxLTFlMWY4MWIyNmI4Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NGftGliwoCe62wFfNDfOvJS1OHr-DpDAcGBBHsyT4MU'
                },
                {id: 3, name: 'Петя', avatar: 'https://estnn.com/wp-content/uploads/2018/08/CSGO-150x150.png'},
                {
                    id: 4,
                    name: 'Катя',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU76yRpDscFUVMSRBNy6mUvRZJg5KxftYE4w&usqp=CAU'
                }
            ]
        },
        sidebar: {
            sidebarFriends: [
                {
                    id: 1,
                    name: 'Вася',
                    avatar: 'https://davepagurek.com/wp-content/uploads/2010/06/TrollFace-150x150.gif'
                },
                {
                    id: 2,
                    name: 'Сергей',
                    avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWY0YmQ3YTYtZjc2My00NTE4LTliODEtYmRmZDQwY2UzZmM5XC9kMjZ5ZXIxLTQyMWJiNWI4LTlmYzItNGQ1YS1iMmQxLTFlMWY4MWIyNmI4Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NGftGliwoCe62wFfNDfOvJS1OHr-DpDAcGBBHsyT4MU'
                },
                {id: 3, name: 'Петя', avatar: 'https://estnn.com/wp-content/uploads/2018/08/CSGO-150x150.png'},
            ]
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionsTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action) //преобразовываем профайл пейдж
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)

        this._callSubscriber(this._state); //уведомляем подписчика

    }
}

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType

export type AddPostActionType = {
    type: "ADD_POST"
    newPostText: string
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}
export type UpdateNewMessageBodyActionType = {
    type: "UPDATE_NEW_MESSAGE_BODY"
    body: string
}
export type SendMessageActionType = {
    type: "SEND_MESSAGE"

}

export type SidebarType = {
    sidebarFriends: Array<SidebarFriendsType>
}
export type SidebarFriendsType = {
    id: number
    avatar: string
    name: string
}
export type FriendsPageType = {
    friendsData: Array<FriendsDataType>
}
export type FriendsDataType = {
    id: number
    name: string
    avatar: string
}
export type DialogsPageType = {
    messagesData: Array<MessagesDataType>
    dialogsData: Array<DialogsDataType>
    newMessageBody: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
    avatar: string
}
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friendsPage: FriendsPageType
    sidebar: SidebarType
}

export default store;
