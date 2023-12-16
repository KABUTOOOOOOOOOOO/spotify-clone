import React, { useState, useRef, useEffect } from "react";
import "../Styles/MusicPlayer.css";
import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

function MusicPlayer({ song, imgSrc, auto }) {
  const [isPlay, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const player = audioPlayer.current;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    player.addEventListener("play", handlePlay);
    player.addEventListener("pause", handlePause);

    return () => {
      player.removeEventListener("play", handlePlay);
      player.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    const player = audioPlayer.current;

    try {
      const seconds = Math.floor(player.duration);

      setDuration(seconds);
      progressBar.current.max = seconds;
    } catch (error) {
      console.error("Error fetching audio duration: ", error);
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrentTime(progressBar.current.value);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const retMinute = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const retSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${retMinute}:${retSeconds}`;
  };

  const changePlayPause = () => {
    const player = audioPlayer.current;

    if (isPlay) {
      player.pause();
    } else {
      player.play().catch((error) => console.error("Playback error: ", error));
    }

    setPlaying(!isPlay);
  };

  return (
    <div className="musicPlayer">
      <div className="songImg">
        <img src={imgSrc} alt="" />
      </div>
      <div className="songAtribute">
        <audio ref={audioPlayer} src={song} preload="metadata" />
        <div className="top">
          <div className="middle">
            <div className="backward">
              <i>
                <FaBackwardStep />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlay ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForwardStep />
              </i>
            </div>
          </div>
        </div>
        <div className="bot">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            defaultValue="0"
            onChange={changeProgress}
            autoPlay={auto}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
