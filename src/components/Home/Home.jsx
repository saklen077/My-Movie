import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
// import MovieList from "../MovieList/MovieList";
import HomeMovie from "./HomeMovie";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        return res.json();
      })
      .then((data) => {
        setPopularMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <>
      <div className="poster pt-2">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3000} // time in ms
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              key={movie.id}
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                  alt={movie?.original_title}
                  className="block w-full h-full object-fill"
                />
                <div
                  className="absolute max-sm:pb-16 max-sm:text-[10px] inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent"
                >
                  <div className="text-left font-extrabold text-3xl mb-2 max-sm:text-2xl">
                    {movie?.original_title}
                  </div>
                  <div className="text-sm mb-2 text-left max-sm:text-xs">
                    {movie?.release_date}
                    <span className="ml-6">
                      {movie?.vote_average.toFixed(1)}
                      <i className="fas fa-star ml-1" />
                    </span>
                  </div>
                  <div className="italic text-base w-1/2 text-left max-md:w-full max-sm:text-sm  md:block">
                    {movie?.overview.slice(0, 118)}...
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
     <HomeMovie />
      </div>
    </>
  );
};

export default Home;
