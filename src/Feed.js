import React, { useState, useEffect } from "react";
import "./Feed.css";
import {
  CalendarViewDayRounded,
  Create,
  EventAvailable,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import FeedOption from "./FeedOption";
import Post from "./Post";
import { input } from "@testing-library/user-event/dist/cjs/event/input.js";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";

export default function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || user.email[0],
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="feed-input">
          <Create className="pen" />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed-option">
          <FeedOption title="Photo" Icon={Image} color="#70B5F9" />
          <FeedOption title="Video" Icon={Subscriptions} color="#E7A33A" />
          <FeedOption title="Event" Icon={EventNote} color="#C0CBCD" />
          <FeedOption
            title="Write Article"
            Icon={CalendarViewDayRounded}
            color="#7fC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      {/* <Post
        name="Umer Hameed"
        message="Wow this is great"
        description="This is a test"
      /> */}
    </div>
  );
}
