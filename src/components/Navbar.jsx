import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-none p-4 fixed w-full top-0 flex justify-center z-50 font-main"
      id="nav"
    >
      <div className="container">
        <span className="hidden md:flex mx-auto container justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center absolute">
            <div className="align-middle">
              <img src="src/Assets/whit_logo.png" alt="Logo" className="w-24" />
            </div>
          </div>
          {/* Search bar */}
          <div className="flex items-center ml-36 min-w-20 ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="text-[#59595c] pr-5 py-2 rounded-3xl pl-10 bg-white outline-none md:w-40 lg:w-72 font-medium"
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-[#737276]" />
              </div>
            </div>
          </div>
          {/* Home, Login, Signup */}
          <div className="flex items-center px-4" id="links">
            <Link
              to="/"
              className="nav-link px-0 mx-4 py-1 text-white font-medium"
            >
              Home
            </Link>
            <Link
              to="/Login"
              className="ml-2 px-4 py-2 rounded-3xl text-white border-2 border-white font-medium"
            >
              Login
            </Link>
            <Link
              to="/SignUp"
              className="mx-2 px-4 py-2 rounded-3xl text-primary bg-white border-2 border-white"
            >
              Sign Up
            </Link>
          </div>
        </span>
        {/* Mobile Devices */}
        <div className="md:hidden flex items-center justify-between h-10 px-8">
          <div className="flex justify-center items-center">
            <img
              src="src/Assets/whit_logo.png"
              alt="Logo"
              className="w-24 absolute"
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-2 py-1 rounded-md text-primary bg-white focus:outline-none focus:bg-gray-600"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6 fill-current" />
          </button>
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 overflow-auto z-50">
              <div className="flex flex-col items-center">
                <div className="flex items-center relative top-auto mb-10">
                  <div className="align-middle">
                    <img
                      src="src/Assets/whit_logo.png"
                      alt="Logo"
                      className="w-24"
                    />
                  </div>
                </div>
                <div className="container flex flex-col items-center justify-evenly h-56">
                  <div className="flex">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="text-[#59595c] pl-10 pr-5 py-2 rounded-3xl bg-white outline-none w-56 font-medium"
                      />
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-[#737276]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center h-full justify-evenly">
                    <div className="flex">
                      <Link
                        to="/"
                        className="px-4 py-2 text-white font-medium"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Home
                      </Link>
                    </div>
                    <div className="flex w-60 justify-evenly">
                      <div className="flex">
                        <Link
                          to="/Login"
                          className="ml-2 px-4 py-2 rounded-3xl text-white border-2 border-white font-medium"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          Login
                        </Link>
                      </div>
                      <div className="flex">
                        <Link
                          to="/SignUp"
                          className="ml-2 px-4 py-2 rounded-3xl text-[#4120a9] bg-white border-2 border-white"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-center w-20 mt-20">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 focus:outline-none bottom-20 "
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="w-6 h-6 fill-current bg-gray-900 p-2 rounded-full"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
