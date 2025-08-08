"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import MoviesGrid from "@/app/components/MoviesGrid";

const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=eb7e3fd7272143562cec959061b5eb32`;

export default function MoviesGridContainer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setMovies(response.data.results);
        setLoading(false);
      } catch {
        setError(true);
      }
    };

    fetchMovies();
  }, [setMovies]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !error && <MoviesGrid movies={movies} loading={loading} />}
    </div>
  );
}
