import React from "react";
import "../Styles/Library.css";
import { Playlists } from "../Components/PlayLists.js";
import axios from "axios";

const Library = () => {
  const topPlaylists = Playlists.slice(0, 3);
  const botPlaylists = Playlists.slice(3, 6);

  return (
    <div className="library">
      <div className="head">
        <p>Spotify Playlists</p>
      </div>
      <div className="mainPlayLists">
        <div className="yourPlaylist">
          <p>Your Playlists</p>
        </div>
        <div className="playLists">
          {Playlists.map((playlist) => (
            <div className="playlistItem" key={playlist.id}>
              <img src={playlist.imgSrc} alt={playlist.playListName} />
              <p>{playlist.playListName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
