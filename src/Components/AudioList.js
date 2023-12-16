import React, { useState, useEffect } from "react";
import { TheWeekendSongs } from "./TheWeekend";
import { MusicPlayer } from "./MusicPlayer";

import { LiaHeadphonesAltSolid } from "react-icons/lia";
import { FaRegClock } from "react-icons/fa";
import { PiHeartStraight } from "react-icons/pi";
import { PiHeartStraightFill } from "react-icons/pi";

const AudioList = () => {
  const [songs, setSongs] = useState(TheWeekendSongs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((n) => n.addEventListener("click", changeActive));

    return () => {
      allSongs.forEach((n) => n.removeEventListener("click", changeActive));
    };
  }, []);

  const changeFavourite = (id) => {
    setSongs((prevSongs) =>
      prevSongs.map((s) =>
        s.id === id ? { ...s, favourite: !s.favourite } : s
      )
    );
  };

  const setMainSample = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };

  return (
    <div className="AudioList">
      <h2 className="title">
        The list <span>{TheWeekendSongs.length} songs</span>
      </h2>

      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSample(song?.song, song?.imgSrc)}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName}{" "}
                    <span className="songSpan">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      <i>
                        <LiaHeadphonesAltSolid />
                      </i>
                      {song?.auitions}
                    </p>

                    <p className="duration">
                      {" "}
                      <i>
                        <FaRegClock />
                      </i>
                      {song?.songDur}
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <PiHeartStraight />
                        </i>
                      ) : (
                        <i>
                          <PiHeartStraightFill />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} autoplay={auto} />
    </div>
  );
};

export { AudioList };
