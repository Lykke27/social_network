import FriendsBlock from "./components/FriendsBlock/FriendsBlock";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <FriendsBlock />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/News" element={News} />
          <Route path="/Music" element={Music} />
          <Route path="/Settings" element={Settings} />
          <Route path="/Friends" element={Friends} />
          <Route path="/Users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
