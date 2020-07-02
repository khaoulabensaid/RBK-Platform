import React from "react";
import ReactDOM from "react-dom";
import Chat from './components/ChatRoom/ChatRoom.jsx'
import Calendar from './components/ADMIN/Calendar/Calendar.jsx'
import DeleteCohortOrUsers from "./components/ADMIN/DeleteCohortOrUsers/DeleteCohortOrUsers.jsx";
import App from "./components/App/App.jsx";
import ChatRoom from "./components/ChatRoom/ChatRoom.jsx";
import UserPorfile from "./components/ADMIN/UserProfile/UserProfile.jsx";
import  PinnedBoard from "./components/PinnedBoard/PinnedBoard.jsx"
ReactDOM.render(<PinnedBoard />, document.getElementById("app"));

