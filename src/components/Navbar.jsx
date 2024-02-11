import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {Logo}  from "../Assets/whit_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#d9d9d9] p-4">
      <div className="container">
        <span className="hidden md:flex mx-auto container justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Myvet Logo" />
          </div>
          {/* Search bar */}
          <div className="flex items-center">
            <div className="relative ml-20">
              <input
                type="text"
                placeholder="Search..."
                className="text-[#737276] px-4 py-2 rounded-3xl pl-10 bg-[#b7b7b7] outline-none "
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-[#737276]" />
              </div>
            </div>
          </div>
          {/* Home, Login, Signup */}
          <div className="flex items-center">
            <div className="relative">
              <a href="#" className="px-4 py-2 text-black font-medium">
                Home
              </a>
            </div>
            <div className="relative">
              <a
                href="#"
                className="ml-2 px-4 py-2 rounded-3xl text-[#4120a9] border-2 border-[#4120a9] font-medium"
              >
                Login
              </a>
            </div>
            <div className="relative">
              <a
                href="#"
                className="ml-2 px-4 py-2 rounded-3xl bg-[#4120a9] text-white"
              >
                Sign Up
              </a>
            </div>
          </div>
        </span>
        {/* Mobile Devices */}
        <div className="md:hidden flex items-center justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 rounded-md bg-[#4120a9] text-white focus:outline-none focus:bg-gray-600"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6 fill-current" />
          </button>
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 focus:outline-none mt-4 absolute top-0 left-1/2 transform -translate-x-1/2"
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="w-6 h-6 fill-current bg-gray-900 p-2 rounded-full"
                  />
                </button>
                <div className="container flex flex-col items-center justify-evenly w-72 h-60 flex-none">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="text-[#737276] px-4 py-2 rounded-3xl pl-10 bg-[#b7b7b7] outline-none "
                    />
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="text-[#737276]"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <a href="#" className="ml-2 px-4 py-2 text-white">
                      Home
                    </a>
                  </div>
                  <div className="flex">
                    <a
                      href="#"
                      className="ml-2 px-4 py-2 rounded-3xl text-[#4120a9] border-2 border-[#4120a9] font-medium"
                    >
                      Login
                    </a>
                  </div>
                  <div className="flex">
                    <a
                      href="#"
                      className="ml-2 px-4 py-2 rounded-3xl bg-[#4120a9] text-white font-medium"
                    >
                      Sign Up
                    </a>
                  </div>
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
