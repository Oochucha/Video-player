import React from "react";
import { PlaylistItem } from "./PlaylistItem";
import "./component.css";

export const PlayList = ({ videos, onSelectVideo, currentVideo }) => {
  const handleVideoClick = (video) => {
    onSelectVideo(video);
  };

  return (
    <div className="playlist">
      <h2 className="playlist-title">Playlist</h2>
      {videos.map((video, index) => (
        <PlaylistItem
          key={index}
          index={index}
          video={video}
          onClick={handleVideoClick}
          isCurrent={currentVideo === video}
        />
      ))}
    </div>
  );
};
