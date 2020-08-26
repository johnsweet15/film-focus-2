import React, { useEffect, useState } from "react";
import MovieService from "../services/movies";
import MovieCard from "../components/movieCard/movieCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    let response = await MovieService.getPopularMovies();
    setPopularMovies(response.data.results);
    setLoading(false);
  }

  return (
    <div>
      {popularMovies?.map((movie) => {
        return <MovieCard loading={loading} movie={movie} />;
      })}
    </div>
  );
}
