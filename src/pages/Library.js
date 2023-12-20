import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Library.css";
import { Playlists } from "../Components/PlayLists.js";

const Library = () => {
  const [accessToken, setAccessToken] = useState("");
  const [albumsData, setAlbumsData] = useState([]);

  useEffect(() => {
    const getClientCredentialsToken = async () => {
      try {
        const clientId = "a5df27b1278d4ca5970f3e3ee528d458";
        const clientSecret = "0b044f4d73394d97b0cc9adb6933136d";

        const base64Auth = btoa(`${clientId}:${clientSecret}`);

        const response = await axios.post(
          "https://accounts.spotify.com/api/token",
          "grant_type=client_credentials",
          {
            headers: {
              Authorization: `Basic ${base64Auth}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error("Ошибка получения токена:", error.response.data);
      }
    };

    getClientCredentialsToken();
  }, []);

  useEffect(() => {
    const getAlbumsData = async () => {
      try {
        if (accessToken) {
          const albumIds =
            "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc";

          const response = await axios.get(
            `https://api.spotify.com/v1/albums?ids=${albumIds}&limit=20`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setAlbumsData(response.data.albums);
        }
      } catch (error) {
        console.error("Ошибка получения данных альбомов:", error.response.data);
      }
    };

    getAlbumsData();
  }, [accessToken]);

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

      <div className="albumData-container">
        {albumsData.map((albumData) => (
          <div key={albumData.id} className="albumData">
            <img src={albumData.images[0].url} alt={albumData.name} />
            {albumData.name && <p>Album Name: {albumData.name}</p>}
            {albumData.artists && (
              <p>
                Artist:{" "}
                {albumData.artists.map((artist) => artist.name).join(", ")}
              </p>
            )}
            {albumData.release_date && (
              <p>Date of Release: {albumData.release_date}</p>
            )}
            {albumData.total_tracks && <p>Songs: {albumData.total_tracks}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
