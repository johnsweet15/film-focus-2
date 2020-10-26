import React, { useState } from 'react';
import './MovieDetails.scss';

export default function MovieDetails(props) {
  const { movie } = props;
  const [showModal, setShowModal] = useState(false);
  const poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie?.poster_path;
  return (
    <div>
      <img className="details-poster" src={poster} alt="poster" />
      <h2>{movie.title}</h2>
    </div>
  )
}