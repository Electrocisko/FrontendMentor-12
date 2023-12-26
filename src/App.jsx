/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Post from "./components/post/Post";

const postsList = [
  {
    id: 1,
    name: "Mark Webber ",
    info: "reacted to your recent post ",
    post: "My first tournament today!",
    time: "1m ago",
    image: "./images/avatar-mark-webber.webp",
    readed: false,
  },
  {
    id: 2,
    name: "Angela Gray ",
    info: "followed you ",
    time: "5m ago",
    image: "./images/avatar-angela-gray.webp",
    readed: false,
  },
  {
    id: 3,
    name: "Jacob Thompson ",
    info: "has joined your group ",
    group: "Chess Club",
    time: "1 day ago",
    image: "./images/avatar-jacob-thompson.webp",
    readed: false,
  },
  {
    id: 4,
    name: "Rizky Hasanuddin ",
    info: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    image: "./images/avatar-rizky-hasanuddin.webp",
    readed: true,
  },
  {
    id: 5,
    name: "Kimberly Smith ",
    info: "commented on your picture",
    time: "1 week ago",
    image: "./images/avatar-kimberly-smith.webp",
    picture: "./images/image-chess.webp",
    readed: true,
  },
  {
    id: 6,
    name: "Nathan Peterson ",
    info: "reacted to your recent post 5 end-game strategies to increase your win rate",
    time: " 2 weeks ago",
    image: "./images/avatar-nathan-peterson.webp",
    readed: true,
  },
  {
    id: 7,
    name: "Anna Kim ",
    info: "left the group ",
    group: "Chess Group",
    time: "2 weeks ago",
    image: "./images/avatar-anna-kim.webp",
    readed: true,
  },
];

function App() {

  const [posts, setPosts] = useState(postsList);
  const [notif, setNotif] = useState(countNewNotifications())

  function markedAllReading() {
    const aux = posts.map((post) => {
      return { ...post, readed: true };
    });
    setPosts(aux);
    setNotif(0);
  }

  function countNewNotifications () {
    let count = 0;
    posts.forEach(post => {
      !post.readed && count++
    });
   return count;
  }

  return (
    <div className="container">
    <Header handler={markedAllReading} newNotif={notif} />
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">F. J. Zuidwijk</a>.
      </div>
    </div>
  );
}

export default App;
