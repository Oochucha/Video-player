import React from "react";
import "./playlistItem.css";

export const PlaylistItem = ({ video, onClick, isCurrent }) => {
  return (
    <div
      className={`playlist-item ${isCurrent ? "current-video" : ""}`}
      onClick={() => onClick(video)}
    >
      <img src={video.image} alt={video.title} />
      <p>{video.title}</p>
    </div>
  );
};
