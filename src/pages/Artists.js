import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Artists.css";

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const clientId = "a5df27b1278d4ca5970f3e3ee528d458";
      const clientSecret = "0b044f4d73394d97b0cc9adb6933136d";

      // Запрос на получение токена
      const authResponse = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: {
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const accessToken = authResponse.data.access_token;

      // Запрос к API Spotify с использованием токена
      const artistIds = [
        "2CIMQHirSU0MQqyYHq0eOx",
        "57dN52uHvrHOxijzpIgu3E",
        "1vCWHaC5f2uS3yhpwWbIA6",
      ];
      const artistsData = await Promise.all(
        artistIds.map(async (id) => {
          const artistResponse = await axios.get(
            `https://api.spotify.com/v1/artists/${id}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          return artistResponse.data;
        })
      );

      setArtists(artistsData);
    };

    fetchData();
  }, []);

  return (
    <div className="artists">
      <h1>Artists</h1>
      <ul>
        {artists.map((artist) => (
          <div className="artistsData">
            <li key={artist.id}>
              <h3>{artist.name}</h3>
              <p>Followers: {artist.followers.total}</p>
              <div>
                {artist.images.length > 0 && (
                  <img
                    src={artist.images[0].url}
                    alt={`Artist ${artist.name}`}
                  />
                )}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Artists;
