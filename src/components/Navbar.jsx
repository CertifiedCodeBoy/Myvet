import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavSmall from "./navSmall";
import { Button, Divider, Image } from "@chakra-ui/react";
import blacklogo from "../Assets/blacklogo.png";
import {
  InputGroup,
  Input,
  InputLeftElement,
  Box,
  List,
  Flex,
  ListItem,
} from "@chakra-ui/react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const categories = [
  "men's clothing",
  "women's clothing",
  "kids",
  "jewelery",
  "accessories",
];

const Navbar = () => {
  const [focused, setFocused] = useState(false);
  const isTablet = window.screen.width >= 768 && window.screen.width < 1024;
  const isDesktop = window.screen.width >= 1024;
  const [isHoveredMen, setIsHoveredMen] = useState(false);
  const [isHoveredWomen, setIsHoveredWomen] = useState(false);
  const [isHoveredKids, setIsHoveredKids] = useState(false);
  const [isHoveredAccessories, setIsHoveredAccessories] = useState(false);
  return (
    <nav className="bg-gray-200 sticky px-4 py-2 w-full top-0 flex flex-col justify-center items-center z-50 font-main shadow-xl min-h-[60px]">
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
            {isTablet && (
              <SearchInput
                width={focused ? "250px" : "40px"}
                placeholder={!focused ? "" : "Search"}
                pr={{ sm: "0", md: !focused ? "0px" : "14px" }}
              />
            )}
            {isDesktop && (
              <SearchInput
                width={"250px"}
                placeholder={focused ? "" : "Search"}
                pr={"14px"}
              />
            )}
          </div>
          {/* Categories, Login, Signup */}
          <div className="flex items-center px-4">
            <div
              className="flex items-center justify-center gap-4 px-2 h-8"
              id="categories"
            >
              <div
                className="group relative text-md h-[20px] text-black font-medium inline-block"
                onMouseEnter={() => {
                  setIsHoveredMen(true);
                  setIsHoveredWomen(false);
                  setIsHoveredAccessories(false);
                  setIsHoveredKids(false);
                }}
              >
                <Link to={"/Categories/men's clothing"}>Men</Link>
                <span className="absolute h-0.5 bg-black -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-500"></span>
              </div>

              <div
                className="group relative text-md h-[20px] text-black font-medium inline-block"
                onMouseEnter={() => {
                  setIsHoveredMen(false);
                  setIsHoveredWomen(true);
                  setIsHoveredAccessories(false);
                  setIsHoveredKids(false);
                }}
              >
                <Link to={"/Categories/women's clothing"}>Women</Link>
                <span className="absolute h-0.5 bg-black -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-500"></span>
              </div>

              <div
                className="group relative text-md h-[20px] text-black font-medium inline-block"
                onMouseEnter={() => {
                  setIsHoveredKids(true);
                  setIsHoveredWomen(false);
                  setIsHoveredAccessories(false);
                  setIsHoveredMen(false);
                }}
              >
                <Link to={"/Categories/Kids"}>Kids</Link>
                <span className="absolute h-0.5 bg-black -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-500"></span>
              </div>

              <div
                className="group relative text-md h-[20px] text-black font-medium inline-block"
                onMouseEnter={() => {
                  setIsHoveredMen(false);
                  setIsHoveredWomen(false);
                  setIsHoveredAccessories(true);
                  setIsHoveredKids(false);
                }}
              >
                <Link to={"/Categories/jewelery"}>Accessories</Link>
                <span className="absolute h-0.5 bg-black -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-500"></span>
              </div>
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
      <div className="absolute w-[100%] top-[100%] bg-gray-200 overflow-hidden shadow-xl">
        <Box
          display={isHoveredMen ? "block" : "none"}
          onMouseLeave={() => setIsHoveredMen(false)}
          p={4}
          pb={8}
        >
          <Flex justify={"center"} gap={20}>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shirts
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Pants
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shoes
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Hoodies
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Jackets
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Sweaters
            </Link>
          </Flex>
        </Box>

        <Box
          display={isHoveredWomen ? "block" : "none"}
          p={4}
          pb={8}
          onMouseLeave={() => setIsHoveredWomen(false)}
        >
          <Flex justify={"center"} gap={20}>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shirts
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Pants
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shoes
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Hoodies
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Jackets
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Sweaters
            </Link>
          </Flex>
        </Box>

        <Box
          display={isHoveredKids ? "block" : "none"}
          p={4}
          pb={8}
          onMouseLeave={() => setIsHoveredKids(false)}
        >
          <Flex justify={"center"} gap={20}>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shirts
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Pants
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shoes
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Hoodies
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Jackets
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Sweaters
            </Link>
          </Flex>
        </Box>

        <Box
          display={isHoveredAccessories ? "block" : "none"}
          p={4}
          pb={8}
          onMouseLeave={() => setIsHoveredAccessories(false)}
        >
          <Flex justify={"center"} gap={20}>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Gold
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Silver
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Diamond
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Rings
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Necklaces
            </Link>
            <Link
              to={"/Categories/me's clothing "}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Bracelets
            </Link>
          </Flex>
        </Box>
      </div>
    </nav>
  );
};

const SearchInput = ({ width, placeholder, pr }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleChange = async (e) => {
    setSearch(e.target.value);
    const searchTerm = e.target.value;

    // Check if the search term matches a category
    const matchedCategory = categories.find((category) =>
      category.toLowerCase().includes(searchTerm)
    );

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?title=${searchTerm}`
      );
      const data = await response.json();
      const products = data.filter((p) => p.category !== "electronics");

      setResults(
        products
          .map((product) => {
            const highlightedTitle = product.title
              .split(new RegExp(`(${searchTerm})`, "gi"))
              .map((part, i) =>
                part.toLowerCase() === searchTerm.toLowerCase() ? (
                  <span key={i} style={{ backgroundColor: "yellow" }}>
                    {part}
                  </span>
                ) : (
                  part
                )
              );

            // Only include products that contain the search term in their title
            if (highlightedTitle.some((part) => typeof part !== "string")) {
              return {
                id: product.id,
                title: product.title,
                highlightedTitle: highlightedTitle,
              };
            }
          })
          // Remove undefined elements (products that don't contain the search term in their title)
          .filter(Boolean)
      );
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  const handleSearch = () => {
    onClose();
  };

  return (
    <Box pl={4} className="absolute left-20">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FontAwesomeIcon icon={faSearch} />}
        />
        <Input
          readOnly
          type="text"
          placeholder={placeholder}
          bg={"#F2F2F2"}
          height={"40px"}
          rounded={"full"}
          width={width}
          cursor={"pointer"}
          pr={pr}
          _focus={{
            border: "none",
            boxShadow: "md",
            cursor: "pointer",
          }}
          _hover={{
            boxShadow: "md",
            transition: "0.5s",
          }}
          onClick={onOpen}
        />
      </InputGroup>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => {
          onClose();
          setSearch("");
          setResults([]);
          Input.value = "";
        }}
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              textAlign={"center"}
            >
              Search Products, sellers, categories
              <AlertDialogCloseButton />
            </AlertDialogHeader>

            <AlertDialogBody>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={handleChange}
                  bg={"#F2F2F2"}
                  height={"40px"}
                  rounded={"8"}
                  width={"100%"}
                  cursor={"pointer"}
                  pr={pr}
                  _focus={{
                    border: "1px solid #111",
                    boxShadow: "md",
                    cursor: "text",
                  }}
                  _hover={{
                    boxShadow: "md",
                    transition: "0.5s",
                  }}
                />
              </InputGroup>

              <Box
                my={4}
                p={search ? 4 : 0}
                bg={"gray.200"}
                rounded={"md"}
                display={search ? "block" : "none"}
              >
                {results.length === 0 ? (
                  <p>No results found</p>
                ) : (
                  <List spacing={4}>
                    {results.map((result, index) => (
                      <>
                        <ListItem
                          key={index}
                          _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                          onClick={handleSearch}
                        >
                          <Box>
                            <Link to={`/product/${result.id}`}>
                              {result.highlightedTitle}
                            </Link>
                          </Box>
                        </ListItem>
                        {index < results.length - 1 && (
                          <Divider borderColor={"black"} />
                        )}
                      </>
                    ))}
                  </List>
                )}
              </Box>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="teal"
                onClick={handleSearch}
                isDisabled={!search}
                ml={3}
              >
                Search
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default Navbar;
