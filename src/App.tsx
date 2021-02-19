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


type PropsType = {
    state: StateType
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const App:React.FC<PropsType> = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Sidebar sidebar={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage}
                                                  addPost={props.addPost}
                                                  newPostText={props.newPostText}
                                                  updateNewPostText={props.updateNewPostText}/>
                           }/>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                    <Route path='/Friends' component={Friends}/>
                </div>
            </div>
    );
}

export default App;