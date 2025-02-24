import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar  py-0  text-white">
        <div className="navbar-start mx-[1rem] sm:mx-[2.6rem]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/movies/top_rated" className="text-[16px] hover:text-red-500"><span>Top rated</span></a>
              </li>
              <li>
                <a href="/movies/popular" className="text-[16px] hover:text-red-500">Popular</a>
              </li>
              <li>
                <a href="/movies/upcoming" className="text-[16px] hover:text-red-500">Upcoming</a>
              </li>
            </ul>
          </div>
          <a href="/" className=" text-3xl mx-2 md:mr-4 text-red-800 cursor-pointer">MOVIES</a>
          <div className="navbar-center  hidden md:flex ">
            <ul className="menu menu-horizontal px-2 m-2 ">
              <li>
                <a href="/movies/top_rated" className="text-[16px] hover:text-red-500"><span>Top rated</span></a>
              </li>
              <li>
                <a href="/movies/popular" className="text-[16px] hover:text-red-500">Popular</a>
              </li>
              <li>
                <a href="/movies/upcoming" className="text-[16px] hover:text-red-500">Upcoming</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
