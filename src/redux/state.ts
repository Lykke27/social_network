let store = {
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
        }
    },
    _callSubscriber(state: StateType) {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 7, message: body});
            this._callSubscriber(this._state);
        }
    }
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
    newMessageBody:string
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

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body: any) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default store;
