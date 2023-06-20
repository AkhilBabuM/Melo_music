import React, { useEffect, useState } from 'react';
import '../assets/scss/Playlist.scss';
import { useSelector } from 'react-redux';
import MusicCard from './MusicCard';
import Container from './Container';

const Playlist = () => {
  const [musicData, setMusicData] = useState([]);
  const { playlists } = useSelector((state) => state.musicReducer);
  const playlistType = window.location.pathname.substring(15); // Assuming URL pattern: "/playlist/{type}"

  useEffect(() => {
    fetch('http://localhost:3001/music')
      .then((response) => response.json())
      .then((data) => {
        setMusicData(data);
      })
      .catch((error) => {
        console.log('Error fetching music data:', error);
      });
  }, []);

  return (
    <Container>
      <div className="Playlist">
        <h3>Your {playlistType} playlist</h3>
        <div className="Playlist-container">
          {musicData.map((item) => {
            if (item.type === playlistType) {
              return <MusicCard key={item.id} music={item} />;
            }
            return null;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Playlist;
