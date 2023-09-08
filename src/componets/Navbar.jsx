/** @format */

import React from "react";
import Logo from "../assets/Gdsclogo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900  border-opacity-50 flex">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://gdsc.community.dev/drs-kiran-pallavi-patel-global-university-kpgu-vadodara/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="GDSC Logo" />
            <span className="self-center sm:text-1xl lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Google Cloud Study Jams - GDSC KPGU
            </span>
          </a>

          {/* <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          ></div> */}
        </div>
      </nav>
    </div>
  );
}
