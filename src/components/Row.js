import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import Ticker from "react-ticker";

const imgUrl = "https://image.tmdb.org/t/p/w185/";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <Ticker mode="smooth">
        {({ index }) => (
          <>
            <h2>{title}</h2>
          </>
        )}
      </Ticker>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={`${imgUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
