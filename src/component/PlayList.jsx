import React from "react";
import { PlaylistItem } from "./PlaylistItem";
import "./component.css";
import { ReactSortable } from "react-sortablejs";

export const PlayList = ({
  videos,
  onSelectVideo,
  currentVideo,
  setVideos,
}) => {
  const handleVideoClick = (video) => {
    onSelectVideo(video);
  };

  return (
    <div className="playlist">
      <h2 className="playlist-title">Playlist</h2>
      <ReactSortable list={videos} setList={setVideos}>
        {videos.map((video, index) => (
          <PlaylistItem
            key={index}
            index={index}
            video={video}
            onClick={handleVideoClick}
            isCurrent={currentVideo === video}
          />
        ))}
      </ReactSortable>
    </div>
  );
};
