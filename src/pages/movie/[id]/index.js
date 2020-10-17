import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MovieService from "../../../services/movies";
import MovieDetails from '../../../components/movieDetails/movieDetails';

function Movie(props) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  console.log(router)
  const { id } = router.query;

  useEffect(() => {
    getMovieDetails();
  }, []);

  async function getMovieDetails() {
    let response = await MovieService.getMovieDetails(id);
    setMovie(response.data);
    setLoading(false);
  }

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}

export default Movie;