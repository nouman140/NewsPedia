import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo.jsx";

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // setInterval(() => {
  //   console.clear();
  // }, 1000);
  return (
    <>
      <nav className="bg-slate-900 text-white my-0 sm:mx-0 w-full fixed max-w-300 border px-3 py-2 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <h1 className="font-bold text-2xl ">
            <Logo />
          </h1>
          {/* Hamburger button - visible on less than large screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden block text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation links - hidden on mobile unless menu is open */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:grid flex-col lg:grid-cols-6 w-full sm:w-auto mt-5 sm:mt-0  ${
            isMenuOpen ? "animate-fade-in" : ""
          } grid grid-cols-3`}
        >
          <Link
            to="/"
            className="lg:m-0 m-2 text-sm text-white font-bold cursor-pointer hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Business
          </Link>
          <Link
            to="/entertainment"
            className="lg:m-0 m-2 text-sm text-white font-bold cursor-pointer hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Entertainment
          </Link>

          <Link
            to="/health"
            className="lg:m-0 m-2 text-sm text-white font-bold cursor-pointer hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Health
          </Link>
          <Link
            to="/science"
            className="lg:m-0 m-2  text-sm text-white font-bold cursor-pointer hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Science
          </Link>
          <Link
            to="/sports"
            className="lg:m-0 m-2 text-sm text-white font-bold cursor-pointer hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Sports
          </Link>
          <Link
            to="/technology"
            className="lg:m-0 m-2 text-sm text-white font-bold cursor-pointer hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Technology
          </Link>
        </div>
      </nav>
      <h1 className="text-white mt-45 sm:mt-30 mb-3 font-bold sm:text-2xl">
        From Business to Technology - we've got you covered
      </h1>
    </>
  );
}
