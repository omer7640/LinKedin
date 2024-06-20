import React from "react";

export default function FeedOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}
