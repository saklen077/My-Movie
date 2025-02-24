import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Card/Card";
import searchimg from "../../assets/search.svg";

const HomeMovie = () => {
  const { type } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topLoading, setTopLoading] = useState(false);
  const [error, setError] = useState(null);
  const [topError, setTopError] = useState(null);
  const API_KEY = "4e44d9029b1270a757cddc766a1bcb63";
  const debounceRef = useRef(null);

  // Fetch movies based on search query.
  // If query is empty, clear movieList so that top movies are shown.
  const getData = async (query) => {
    if (!query || query.trim() === "") {
      setMovieList([]);
      return;
    }
    try {
      setLoading(true);
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch movies");
      const data = await res.json();
      setMovieList(data.results);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch top 20 popular movies
  const getTopMovies = async () => {
    try {
      setTopLoading(true);
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch top movies");
      const data = await res.json();
      setTopMovies(data.results.slice(0, 20));
    } catch (err) {
      console.error(err);
      setTopError(err.message);
    } finally {
      setTopLoading(false);
    }
  };

  // Debounce search input changes
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      getData(searchQuery);
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [searchQuery]);

  // Fetch Top Movies on component mount
  useEffect(() => {
    getTopMovies();
  }, []);

  // Decide which movies to display:
  // If there's a search query, display search results; otherwise, show top movies.
  const moviesToDisplay =
    searchQuery && searchQuery.trim() !== "" ? movieList : topMovies;
  const displayLoading =
    searchQuery && searchQuery.trim() !== "" ? loading : topLoading;
  const displayError =
    searchQuery && searchQuery.trim() !== "" ? error : topError;
  const sectionTitle =
    searchQuery && searchQuery.trim() !== "" ? "Search Results" : "Popular Movies";

  return (
    <div className="px-12 py-4">
      {/* Search Section */}
      <div className="flex my-10 mx-4 bg-white items-center py-3 px-4 mb-6 border border-gray-300 max-w-xs rounded-lg shadow-sm">
        <img src={searchimg} width={24} height={24} alt="Search Icon" />
        <input
          type="text"
          placeholder="Search any movie..."
          aria-label="Search any movie"
          className="p-1 pl-2 text-lg font-light text-gray-800 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <h2 className="my-10 mx-4 text-2xl text-white hover:text-red-700 cursor-pointer">
        {sectionTitle}
      </h2>

      {displayLoading && <p className="text-white p-4">Loading...</p>}
      {displayError && (
        <div className="text-red-500 p-4">
          <p>{displayError}</p>
          <button
            onClick={() => {
              if (searchQuery && searchQuery.trim() !== "") {
                getData(searchQuery);
              } else {
                getTopMovies();
              }
            }}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Retry
          </button>
        </div>
      )}

      {/* Movies Grid */}
      <div className="grid gap-6 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {moviesToDisplay && moviesToDisplay.length > 0 ? (
          moviesToDisplay.map((movie) => <Cards key={movie.id} movie={movie} />)
        ) : (
          !displayLoading && (
            <p className="text-white col-span-full text-center">
              No movies found
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default HomeMovie;
