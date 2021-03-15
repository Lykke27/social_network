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
import {StateType, StoreType} from "./redux/store";
import store from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar sidebar={props.store._state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
                <Route path='/Friends' component={Friends}/>
            </div>
        </div>
    );
}

export default App;