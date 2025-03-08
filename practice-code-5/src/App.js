import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
const API = "AIzaSyAdL9rgF1HcpvBz6dVN4OI63a45YE5jxSc";
const channelId = "@letscodevinay";

var fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${channelId}&part=snippet,id&order=date&maxResults=20`;
function App() {
  const [allvideos, setAllvideos] = useState([]);
  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.jsn)
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
        }));
        setAllvideos(result);
      });
  }, []);
  console.log(allvideos);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_iThtzRXOKY?si=6dtNaPer5Dq6DQe3"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
