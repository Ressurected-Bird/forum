import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav
        className="bg-white shadow-lg
      "
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center">
            <img
              src="assets/logo.svg"
              className="h-10 sm:h-20 mr-3"
              alt="Logo"
            />
            <span className="text_gradient self-center text-2xl font-semibold whitespace-nowrap ">
              ResurrectedBird
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white">
              <li>
                <Link
                  to={"/"}
                  className="block py-2  pr-4 text-gray-900 font-bold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="block py-2  pr-4 text-gray-900 font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="block py-2  pr-4 text-gray-900 font-bold"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={"/discussion"}
                  className="block py-2  pr-4 text-gray-900 font-bold"
                >
                  Discussion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
