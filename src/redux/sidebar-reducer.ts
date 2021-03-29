import {SidebarType} from "./store";
import {ActionsTypes} from "./redux-store";

let initialState = {
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
};


const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        default: return state;
    }
}

export default sidebarReducer;