import "./Widgets.css";
import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";

export default function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
        <FiberManualRecord className="svg" />
      </div>
      <div className="widgets-articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>Latest News</h2>
        <Info className="svg" />
      </div>
      {newsArticle("Hello world", "Top news- 9099 readers")}
      {newsArticle("Corona Virus: UK updates", "Top news- 9099 readers")}
      {newsArticle("Tesla Hits new high", "Auto and Cars- 9099 readers")}
      {newsArticle("bitcoin break $200", "Crypto- 9099 readers")}
      {newsArticle("Is Redux too good?", "Codes- 9099 readers")}
      {newsArticle("React launches course", "Top news- 9099 readers")}
    </div>
  );
}
