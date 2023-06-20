import React, { useEffect, useState } from 'react';
import '../assets/scss/MusicCard.scss';
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaying } from "../../actions/actions";
import Name from "./Name";
import { Skeleton } from "@material-ui/lab";
import Box from "@material-ui/core/Box";

function MusicCard({ music }) {
  const [isHovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();
  const currentPlaying = useSelector(state => state.musicReducer.playing);

  function handleResponse() {
    setHovered(!isHovered);
  }

  function handlePlay(musicUri) {
    dispatch(setCurrentPlaying({ ...currentPlaying, musicUri }));
  }

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="music-card">
      {!loaded ? (
        <div className="Skeleton-top">
          <Skeleton variant="rect" width={210} height={210} />
          <Box pt={0.5}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </div>
      ) : (
        <React.Fragment>
          <div
            className="music-card-cover"
            onMouseOver={handleResponse}
            onClick={() => handlePlay(music.uploadmusicuri)}
          >
            <img src={music.uploadimageuri} alt={music.name} />
            <div className="play-circle">
              <PlayCircleFilledWhiteIcon />
            </div>
          </div>
          <Name name={music.name} className="song-name" length={(music.name ?? '').length} />
          <Name name={music.author_name ?? ''} className="author-name" length={(music.author_name ?? '').length} />
        </React.Fragment>
      )}
    </div>
  );
}

export default MusicCard;
