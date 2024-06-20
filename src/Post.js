import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FeedOption from "./FeedOption";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUp,
} from "@mui/icons-material";

export default function Post({
  name,
  description,
  message,
  photoUrl,
  Icon,
  title,
  color,
}) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-button">
        <FeedOption Icon={ThumbUp} title="like" color="gray" />
        <FeedOption Icon={ChatOutlined} title="comment" />
        <FeedOption Icon={ShareOutlined} title="share" />
        <FeedOption Icon={SendOutlined} title="send" />
      </div>
    </div>
  );
}
