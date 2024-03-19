import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavSmall from "./navSmall";
import { Button, Image, useStatStyles } from "@chakra-ui/react";
import blacklogo from "../Assets/blacklogo.png";
import { InputGroup, Input, InputLeftElement, Box } from "@chakra-ui/react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    //search logic
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const [focused, setFocused] = useState(false);

  return (
    <nav className="bg-gray-200 sticky px-4 py-2 w-full top-0 flex justify-center items-center z-50 font-main shadow-xl min-h-[60px]">
      <div className="container">
        <span className="hidden md:flex mx-auto justify-between items-center w-full">
          <div className="flex justify-start align-middle items-center relative max-h-16 w-auto lg:w-[600px] h-10  ">
            <Box>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <Image
                  src={blacklogo}
                  alt="Logo"
                  width={"70px"}
                  minWidth={"60px"}

                />
              </Link>
            </Box>
            {window.screen.width >= 768 && window.screen.width < 1024 ? (
            <Box pl={4} className="absolute left-20">
              <InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FontAwesomeIcon icon={faSearch}/>}
                  />
                  <Input
                    type="text"
                    placeholder={!focused ? "" : "Search"}
                    value={search}
                    onChange={handleChange}
                    bg={"#F2F2F2"}
                    height={"40px"}
                    rounded={"full"}
                    width={focused ? "250px" : "40px"}
                    cursor={"pointer"}
                    pr={{ sm: "0", md: !focused ? "0px" : "14px" }} // Added left padding
                    _focus={{ border: "1px solid #111", boxShadow: "lg", cursor: "text"}}
                    _hover={{ border: "1px solid #111", boxShadow: "lg", transition: "0.5s"}}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    transition="width 0.5s" // Added transition for smoother animation
                  />
                </InputGroup>
              </InputGroup>
            </Box>
            ): window.screen.width >= 1024 ? (
            <Box pl={4} className="absolute left-20">
              <InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FontAwesomeIcon icon={faSearch}/>}
                  />
                  <Input
                    type="text"
                    placeholder={focused ? "" : "Search"}
                    value={search}
                    onChange={handleChange}
                    bg={"#F2F2F2"}
                    height={"40px"}
                    rounded={"full"}
                    width={"250px"}
                    pr={"14px"} // Added left padding
                    _focus={{ border: "1px solid #111", boxShadow: "lg", cursor: "text"}}
                    _hover={{ border: "1px solid #111", boxShadow: "lg", transition: "0.5s"}}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                  />
                </InputGroup>
              </InputGroup>
            </Box>
            ): null 
            }
          </div>
          {/* Categories, Login, Signup */}
          <div className="flex items-center px-4">
            <div
              className="flex items-center justify-center px-2"
              id="categories"
            >
              <Link
                to={"/Categories/men's clothing"}
                className={`text-md pr-4 h-[20px] text-black font-medium`}
              >
                Men
              </Link>
              <Link
                to={"/Categories/women's clothing"}
                className={`text-md px-4 h-[20px] text-black font-medium`}
              >
                Women
              </Link>
              <Link
                to={"/Categories/kids"}
                className={`text-md px-4 h-[20px] text-black font-medium`}
              >
                Kids
              </Link>
              <Link
                to={"/Categories/jewelery"}
                className={`text-md px-4 h-[20px] text-black font-medium`}
              >
                Accessories
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
                  rounded={"full"}
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
                  rounded={"full"}
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
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <Image src={blacklogo} alt="Logo" className="w-[70px]" />
            </Link>
          </div>
          <NavSmall />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
