import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";
import MyPosts from "./components/Profile/MyPosts/MyPosts";


type PropsType = {
    state: StateType
    newPostText: string
    dispatch: any
}

const App: React.FC<PropsType> = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar sidebar={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}
                                              newPostText={props.newPostText}
                       />
                       }/>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                              dispatch={props.dispatch}/>}/>
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
                <Route path='/Friends' component={Friends}/>
            </div>
        </div>
    );
}

export default App;