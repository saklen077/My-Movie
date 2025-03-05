import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie.css";

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, [id]);

    const getData = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
            );
            const data = await response.json();
            setMovie(data);
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };

    return (
        <div className="w-full flex flex-col items-center px-8 py-6 mr-[2rem] max-md:pl-[2rem] pl-[4rem]">
            {/* Movie Details Section */}
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">
                {/* Movie Poster */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] h-[450px] rounded-lg shadow-lg"
                        src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.poster_path || ""}`}
                        alt={currentMovieDetail?.original_title || "Movie Poster"}
                    />
                </div>

                {/* Movie Info */}
                <div className="text-white flex flex-col max-lg:text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{currentMovieDetail?.original_title || "Title"}</h1>
                    <p className="text-md sm:text-lg text-gray-300 italic">{currentMovieDetail?.tagline || ""}</p>

                    <div className=" items-center gap-4 mt-2 max-lg:text-center">
                        <span className="text-yellow-400 font-bold text-lg">
                            ⭐ {currentMovieDetail?.vote_average?.toFixed(1)}
                        </span>
                        <span className="text-gray-400">({currentMovieDetail?.vote_count} votes)</span>
                    </div>

                    <p className="text-gray-300 mt-2">
                        <strong>Runtime:</strong> {currentMovieDetail?.runtime} mins
                    </p>
                    <p className="text-gray-300">
                        <strong>Release Date:</strong> {currentMovieDetail?.release_date}
                    </p>

                    {/* Genres */}
                    <div className=" gap-2 mt-4 max-lg:text-center">
                        {currentMovieDetail?.genres?.map((genre) => (
                            <span key={genre.id} className="px-3 py-1 border border-white rounded-full text-sm">
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    {/* Synopsis */}
                    <div className="mt-6">
                        <h2 className="text-xl sm:text-2xl font-semibold">Synopsis</h2>
                        <p className="text-gray-300 mt-2 text-sm sm:text-base">
                            {currentMovieDetail?.overview || "No synopsis available."}
                        </p>
                    </div>
                </div>
            </div>

            {/* Useful Links Section */}
            <div className="mt-10 w-full max-w-7xl flex max-sm:flex-col max-sm:gap-8 text-white lg:flex-row justify-between justify-items-center items-center text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">Useful Links</h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4  lg:mt-0">
                    {currentMovieDetail?.homepage && (
                        <a
                            href={currentMovieDetail.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-white rounded-lg text-sm sm:text-base hover:bg-white hover:text-black transition"
                        >
                            Homepage 🔗
                        </a>
                    )}
                    {currentMovieDetail?.imdb_id && (
                        <a
                            href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-lg text-sm sm:text-base hover:bg-yellow-400 hover:text-black transition"
                        >
                            IMDb 🎬
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Movie;
