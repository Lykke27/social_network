import React from 'react';
import './App.css';
import FriendsBlock from "./components/FriendsBlock/FriendsBlock";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <FriendsBlock/>
            <Sidebar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
                <Route path='/Friends' component={Friends}/>
                <Route path='/Users'
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;