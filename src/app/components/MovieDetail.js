"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function MovieDetail({ id }) {
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        setMovieDetail(response.data);
        setLoading(false);
      } catch {
        setError(true);
      }
    };

    fetchMovieDetail();
  }, [id]);


  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && !error && (
        <div className="grid">
          <div className="col_6  flex justify-center p-10">
            <div className="relative w-[500px] h-[500px]">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                fill={true}
                alt={""}
              />
            </div>
          </div>
          <div className="col_6 flex flex-col justify-center p-10">
            <h1 className="text-2xl font-bold mb-8">{movieDetail.title}</h1>
            <p className="mb-10">{movieDetail.overview}</p>

            <ul className="generos mb-10">
              {movieDetail.genres.map((genre) => (
                <li>{genre.name}</li>
              ))}
            </ul>

            <div className="flex gap-5">
              <Link
                className="bg-white rounded-xl p-2 w-[150px] text-black text-center hover:bg-opacity-50"
                href="/"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
