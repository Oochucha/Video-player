import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import "./component.css";

export const VideoPlayer = ({ video, playingOnClick }) => {
  const [playing, setPlaying] = useState(false | playingOnClick);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(0.7);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (state) => {
    setPlayedSeconds(state.playedSeconds);
    setTotalSeconds(state.loadedSeconds);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  useEffect(() => {
    if (playedSeconds === totalSeconds) {
      setPlaying(false);
    }
  }, [playedSeconds, totalSeconds]);

  const handleSeekChange = (e) => {
    const seekTo = parseFloat(e.target.value);
    setPlayedSeconds(seekTo);
    playerRef.current.seekTo(seekTo);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="video-player">
      <h2 className="video-title">{video.title}</h2>
      <ReactPlayer
        ref={playerRef}
        url={video.url}
        playing={playing}
        playbackRate={speed}
        volume={volume}
        width={"100%"}
        style={{ background: "grey" }}
        onProgress={handleProgress}
      />
      <div className="controls">
        <button className="button" onClick={handlePlayPause}>
          {playing ? "Pause" : "Play"}
        </button>
        <div className="seek-container">
          <div className="seek-input-container">
            <input
              type="range"
              min={0}
              max={totalSeconds}
              value={playedSeconds}
              onChange={handleSeekChange}
            />
            <span className="seek-duration">
              {formatTime(playedSeconds)} / {formatTime(totalSeconds)}
            </span>
          </div>
        </div>
        <div className="volume-control">
          Volume:
          <button
            className="button"
            onClick={() => handleVolumeChange(volume - 0.1)}
          >
            -
          </button>
          <span>{Math.round(volume * 100)}%</span>
          <button
            className="button"
            onClick={() => handleVolumeChange(volume + 0.1)}
          >
            +
          </button>
        </div>
        <div className="speed-control">
          <button
            className="button"
            onClick={() => handleSpeedChange(speed - 0.25)}
          >
            Speed -
          </button>
          <span>{speed}x</span>
          <button
            className="button"
            onClick={() => handleSpeedChange(speed + 0.25)}
          >
            Speed +
          </button>
        </div>
      </div>
    </div>
  );
};
