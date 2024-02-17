import { useState } from "react";
import "./App.css";
import { VideoPlayer } from "./component/VideoPlayer";
import { PlayList } from "./component/PlayList";

function App() {
  const [videos, setVideos] = useState([
    {
      title: "Oussifooty",
      url: "videos/oussifooty.mp4",
      image: "image/oussifooty.jpeg",
    },
    {
      title: "Hamilton: The GOAT",
      url: "videos/hamilton.mp4",
      image: "image/hamilton.jpeg",
    },
    {
      title: "Farmer speaking English",
      url: "videos/farmer.mp4",
      image: "image/farmer.jpeg",
    },
    {
      title: "F1: The Game",
      url: "videos/f1.mp4",
      image: "image/f1.jpeg",
    },
  ]);

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [playing, setPlaying] = useState(false);

  const handleSelectVideo = (video) => {
    setCurrentVideo(video);
    setPlaying(true);
  };

  return (
    <div className="app">
      <h1 className="app-title">Awesome Video Player</h1>
      <div className="wrapper">
        <div className="video-player-container">
          <VideoPlayer video={currentVideo} playingOnClick={playing} />
        </div>
        <div className="playlist-container">
          <PlayList
            videos={videos}
            onSelectVideo={handleSelectVideo}
            currentVideo={currentVideo}
            setVideos={setVideos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
