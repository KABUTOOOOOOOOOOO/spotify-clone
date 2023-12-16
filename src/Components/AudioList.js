import React, { useState, useEffect } from "react";
import { TheWeekendSongs } from "./TheWeekend";
import { MusicPlayer } from "./MusicPlayer";

import { LiaHeadphonesAltSolid } from "react-icons/lia";
import { FaRegClock } from "react-icons/fa";
import { PiHeartStraight } from "react-icons/pi";
import { PiHeartStraightFill } from "react-icons/pi";

function AudioList() {
  const [songs, setSongs] = useState(TheWeekendSongs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");
    function changeMenuActive(index) {
      setActiveIndex(index);
    }
    songs.forEach((n, index) =>
      n.addEventListener("click", () => changeMenuActive(index))
    );
    return () => {
      songs.forEach((n, index) =>
        n.removeEventListener("click", () => changeMenuActive(index))
      );
    };
  }, []);

  const changeFavourite = (id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id ? { ...song, favourite: !song.favourite } : song
      )
    );
  };

  const setMainSample = (selectedSong, imgSrc) => {
    setSongs((prevSongs) => {
      const newSongs = [...prevSongs];
      newSongs.splice(activeIndex, 1, selectedSong);
      return newSongs;
    });
    setImage(imgSrc);
  };

  return (
    <div className="audioList">
      <h2 className="title">
        The List <span>{`${songs.length} songs`}</span>
      </h2>
      <div className="songsContainer">
        {songs &&
          songs.map((sample, index) => (
            <div
              className={`songs${index === activeIndex ? " active" : ""}`}
              key={sample?.id}
              onClick={() => setMainSample(sample, sample?.imgSrc)}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="sample">
                <div className="imgBox">
                  <img src={sample?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="sampleName">
                    {sample?.songName}
                    <span className="spanArtist">{sample?.artist}</span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <LiaHeadphonesAltSolid />
                        2,245,872,098
                      </i>
                    </p>
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03:04
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(sample?.id)}
                    >
                      {sample?.favourite ? (
                        <i>
                          <PiHeartStraightFill />
                        </i>
                      ) : (
                        <i>
                          <PiHeartStraight />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <MusicPlayer song={song} imgSrc={img} />
    </div>
  );
}

export { AudioList };
