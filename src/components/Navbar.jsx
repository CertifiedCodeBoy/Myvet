import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavSmall from "./navSmall";
import { Box, Flex, Button } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <nav className="bg-gray-200 sticky px-4 py-2 w-full top-0 flex justify-center items-center z-50 font-main shadow-xl min-h-[60px]">
      <div className="container">
          <span className="hidden md:flex mx-auto justify-between items-center w-full">
            {/* Logo */}
            <div className="flex justify-between items-center relative align-middle max-h-16 w-60 lg:w-[400px] ">
            <Link to="/">
              <img src="src/Assets/blacklogo.png" alt="Logo" className="w-[70px] absolute -top-[14px] left-0" />
            </Link>
            {/* Search bar */}
            <div className=" min-w-10 ">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="text-[#59595c] bg-gray-300 pr-5 py-2 rounded-3xl pl-10 outline-none h-10 md:w-40 lg:w-60 font-medium"
                  />
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faSearch} className="text-[#737276]" />
                </div>
              </div>
            </div>
                  </div>
            {/* Home, Login, Signup */}
            <div className="flex items-center px-4">
              <div
                className="flex items-center justify-center px-2"
                id="categories"
              >
                <Link to={"/Categories/men's clothing"} className={`text-md pr-4 h-[20px] text-black font-medium`}>
                  Men
                </Link>
                <Link to={"/Categories/jewelery"} className={`text-md px-4 h-[20px] text-black font-medium`}>
                  Jewelry
                </Link>
                <Link to={"/Categories/women's clothing"} className={`text-md pl-4 h-[20px] text-black font-medium`}>
                  Women
                </Link>
              </div>
              <div className="flex flex-row-reverse items-center gap-4 ml-4">
              <Link to="/SignUp">
                <Button
                  border={"1px"}
                  bgColor={"#111"}
                  py={4}
                  color={"#F2F2F2"}
                  _hover={{
                    backgroundColor: "#111",
                    color: "#F2F2F2",
                    shadow: "md",
                  }}
                  h={8}
                  fontSize={16}
                  rounded={'full'}
                >
                  Sign Up
                </Button>
              </Link>
              <Link to="/LogIn">
                <Button
                  border={"1px"}
                  py={4}
                  _hover={{
                    shadow: "md",
                  }}
                  h={8}
                  fontSize={16}
                  rounded={'full'}
                >
                  Log in
                </Button>
              </Link>
              </div>
            </div>
          </span>
        {/* Mobile Devices */}
        <div className="md:hidden flex items-center justify-between h-8">
          <div className="flex align-middle items-center -ml-4">
            <Link to="/">
              <img src="src/Assets/blacklogo.png" alt="Logo" className="w-[70px]" />
            </Link>
          </div>
          <NavSmall />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
