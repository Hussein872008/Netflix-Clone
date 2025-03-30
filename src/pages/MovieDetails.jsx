import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=8575fd1d48fa1a89e2aeb1dc248d2a36`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError("There was an error fetching the movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-white text-center mt-20">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-20">
        <p>{error}</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-red-500 text-center mt-20">
        <p>Movie not found!</p>
      </div>
    );
  }

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "https://via.placeholder.com/1200x500?text=No+Image+Available";

  return (
    <div
      className="min-h-screen text-white flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${backdropUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10 bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-4xl mx-auto p-6 bg-black bg-opacity-80 rounded-lg shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-60 h-auto rounded-lg shadow-lg"
        />

        <div className="ml-6 space-y-4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-300">{movie.overview}</p>
          <p className="text-yellow-400">⭐ {movie.vote_average} / 10</p>
          <p className="text-gray-400">📅 {movie.release_date}</p>

          <button
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition"
            onClick={() => navigate(`/watch/${id}`)}
          >
            ▶ Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
