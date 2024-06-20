import { Avatar, Icon } from "@mui/material";
import React from "react";
import { selectUser } from "./features/counter/userSlice";
import { useSelector } from "react-redux";

export default function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="header-option">
      {Icon && <Icon className="headerOption-icon" />}
      {avatar && (
        <Avatar className="headerOption-icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}
