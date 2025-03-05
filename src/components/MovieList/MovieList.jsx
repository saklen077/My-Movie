import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Card/Card";
const MovieList = () => {
 
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="px-[3rem] py-[1rem]">
      <h2 className="my-[2.5rem] mx-[1rem] text-[1.75rem] text-white hover:text-red-700 cursor-pointer">
        {(type ? type : "POPULAR").toUpperCase()}
      </h2>
       {/* Movies Grid */}
       <div className="grid gap-6 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        { 
          movieList.map((movie) => <Cards key={movie.id} movie={movie} />)
        }
      </div>
    </div>
  );
};

export default MovieList;
