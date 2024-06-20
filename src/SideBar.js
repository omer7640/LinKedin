import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";

export default function SideBar() {
  const user = useSelector(selectUser);
  const recentTab = (topic) => (
    <div className="sidebar_recent">
      <span className="side-hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="side-bar">
      <div className="sidebar-top">
        <img src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"></img>
        <Avatar src={user.photoUrl} className="sidebar-avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-stat-number">2,459</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-stat-number">1,480</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentTab("reactjs")}
        {recentTab("programming")}
        {recentTab("softwareengineering")}
        {recentTab("python")}
      </div>
    </div>
  );
}
