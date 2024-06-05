import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Badge,
  List,
  Flex,
  ListItem,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Divider,
  Button,
} from "@chakra-ui/react";
import blacklogo from "../Assets/blacklogo.png";
import { Link } from "react-router-dom";
import NavSmall from "./navSmall";
//contexts
import { SellerContext } from "../contexts/SellerContext";
import { UserContext } from "../contexts/UserContext";
//icons
import {
  ArrowSquareOut,
  Gear,
  GearSix,
  Heart,
  MagnifyingGlass,
  ShoppingBag,
  ShoppingCartSimple,
  TShirt,
  UserCircle,
} from "phosphor-react";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const LoggedInNav = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { isSeller } = useContext(SellerContext);
  const { user } = useContext(UserContext);
  const [focused, setFocused] = useState(false);
  const isTablet = window.screen.width >= 768 && window.screen.width < 1024;
  const isDesktop = window.screen.width >= 1024;
  const [isHoveredMen, setIsHoveredMen] = useState(false);
  const [isHoveredWomen, setIsHoveredWomen] = useState(false);
  const [isHoveredKids, setIsHoveredKids] = useState(false);
  const [isHoveredAccessories, setIsHoveredAccessories] = useState(false);
  const location = useLocation();
  const current = location.pathname;
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
                <Link to={"/PreCategory/Men"}>Men</Link>
                <span
                  className={`absolute h-0.5 bg-black -bottom-1 left-0 ${
                    current === "/Categories/men's%20clothing"
                      ? "w-full"
                      : "w-0"
                  } group-hover:w-full transition-all duration-500`}
                ></span>
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
                <Link to={"/PreCategory/Women"}>Women</Link>
                <span
                  className={`absolute h-0.5 bg-black -bottom-1 left-0 ${
                    current === "/Categories/women's%20clothing"
                      ? "w-full"
                      : "w-0"
                  } group-hover:w-full transition-all duration-500`}
                ></span>{" "}
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
                <Link to={"/PreCategory/Kids"}>Kids</Link>
                <span
                  className={`absolute h-0.5 bg-black -bottom-1 left-0 ${
                    current === "/Categories/Kids" ? "w-full" : "w-0"
                  } group-hover:w-full transition-all duration-500`}
                ></span>{" "}
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
                <Link to={"/PreCategory/Accessories"}>Accessories</Link>
                <span
                  className={`absolute h-0.5 bg-black -bottom-1 left-0 ${
                    current === "/Categories/jewelery" ? "w-full" : "w-0"
                  } group-hover:w-full transition-all duration-500`}
                ></span>{" "}
              </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-4 ml-4">
              <div
                className="flex items-center relative"
                onMouseEnter={() => {
                  onOpen();
                }}
              >
                <Link to={`/Profile/${user.id}`}>
                  <div className="flex items-center gap-2 ml-4">
                    {user ? (
                      <Avatar
                        name={user.firstName}
                        src={user.pic}
                        size="sm"
                        mr={2}
                      />
                    ) : (
                      <UserCircle size={34} />
                    )}
                    <span>{user ? user.firstName : "Profile"}</span>
                  </div>
                </Link>
                <div
                  className="
                absolute top-12 right-0 w-60 z-50
                "
                  onMouseLeave={() => {
                    onClose();
                  }}
                >
                  <Popover
                    placement="bottom"
                    closeOnBlur={true}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <PopoverContent>
                      <PopoverHeader className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black font-semibold">
                        {user ? (
                          <Avatar
                            name={user.firstName}
                            src={user.pic}
                            size="sm"
                            mr={2}
                          />
                        ) : (
                          <UserCircle size={34} />
                        )}
                        <span>{user ? user.firstName : "Profile"}</span>
                      </PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody
                        className="
                        flex flex-col gap-4 py-2 
                      "
                      >
                        <Link
                          to={`/Orders`}
                          className="flex items-center gap-2 hover:underline"
                          onClick={() => {
                            onClose();
                          }}
                        >
                          <ShoppingBag size={24} />
                          <span>My Orders</span>
                        </Link>
                        <Link
                          to={`/Favorites`}
                          className="flex items-center gap-2 hover:underline"
                          onClick={() => {
                            onClose();
                          }}
                        >
                          <Heart size={24} />
                          <span>My Wishlist</span>
                        </Link>
                        <Link
                          to={`/Cart`}
                          className="flex items-center gap-2 hover:underline"
                          onClick={() => {
                            onClose();
                          }}
                        >
                          <Box pos={"relative"}>
                            <ShoppingCartSimple size={24} />
                            <Badge
                              colorScheme="red"
                              borderRadius="full"
                              pos="absolute"
                              top="-10px"
                              right="-10px"
                            >
                              3
                            </Badge>
                          </Box>
                          <span>My Cart</span>
                        </Link>
                        <Link
                          to={`/Settings`}
                          className="flex items-center gap-2 hover:underline"
                          onClick={() => {
                            onClose();
                          }}
                        >
                          <GearSix size={24} />
                          <span>Settings</span>
                        </Link>
                        {
                          //if user is seller, show seller products
                          user.isSeller ? (
                            <Link
                              to={`/Profile/${user.id}`}
                              className="flex items-center gap-2 hover:underline"
                              onClick={() => {
                                onClose();
                              }}
                            >
                              <TShirt size={24} />
                              <span>My Products</span>
                            </Link>
                          ) : null
                        }
                        <Link
                          to="/Profile"
                          className="flex items-center gap-2 hover:underline"
                        >
                          <ArrowSquareOut size={24} color="red" />
                          <span
                            className="
                            text-red-500
                          "
                          >
                            Logout
                          </span>
                        </Link>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
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
              to={"/Categories/Shirts"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shirts
            </Link>
            <Link
              to={"/Categories/Pants"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Pants
            </Link>
            <Link
              to={"/Categories/Shoe"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shoe
            </Link>
            <Link
              to={"/Categories/Hoodies"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Hoodies
            </Link>
            <Link
              to={"/Categories/Jackets"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Jackets
            </Link>
            <Link
              to={"/Categories/Sweaters"}
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
              to={"/Categories/Shirts"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shirts
            </Link>
            <Link
              to={"/Categories/Pants"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Pants
            </Link>
            <Link
              to={"/Categories/Shoe"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shoe
            </Link>
            <Link
              to={"/Categories/Hoodies"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Hoodies
            </Link>
            <Link
              to={"/Categories/Jackets"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Jackets
            </Link>
            <Link
              to={"/Categories/Sweaters"}
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
              to={"/Categories/Shirts"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shirts
            </Link>
            <Link
              to={"/Categories/Pants"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Pants
            </Link>
            <Link
              to={"/Categories/Shoe"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Shoe
            </Link>
            <Link
              to={"/Categories/Hoodies"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Hoodies
            </Link>
            <Link
              to={"/Categories/Jackets"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Jackets
            </Link>
            <Link
              to={"/Categories/Sweaters"}
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
              to={"/Categories/"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Gold
            </Link>
            <Link
              to={"/Categories/"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Silver
            </Link>
            <Link
              to={"/Categories/"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Diamond
            </Link>
            <Link
              to={"/Categories/"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Rings
            </Link>
            <Link
              to={"/Categories/"}
              className={`text-md px-4 h-[20px] text-black font-medium`}
            >
              Necklaces
            </Link>
            <Link
              to={"/Categories/"}
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

  const handleChange = async (e) => {
    setSearch(e.target.value);
    const searchTerm = e.target.value;

    const response = await fetch(
      `http://localhost:5000/search?name=${searchTerm}`
    );
    const data = await response.json();
    setResults(
      data.result
        .map((product) => {
          const highlightedTitle = product.name
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
              id: product._id,
              title: product.name,
              highlightedTitle: highlightedTitle,
            };
          }
        })
        // Remove undefined elements (products that don't contain the search term in their title)
        .filter(Boolean)
    );
  };

  const handleSearch = () => {
    setSearch("");
    setResults([]);
  };

  return (
    <Box pl={4} className="relative">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FontAwesomeIcon icon={faSearch} />}
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={handleChange}
          bg={"#F2F2F2"}
          height={"40px"}
          rounded={"full"}
          width={width}
          cursor={"text"}
          pr={pr}
          _focus={{
            border: "none",
            boxShadow: "md",
          }}
          _hover={{
            boxShadow: "md",
            transition: "0.5s",
          }}
        />
      </InputGroup>

      {search && (
        <Box
          my={4}
          p={4}
          bg={"gray.200"}
          rounded={"md"}
          position="absolute"
          zIndex="1000"
          width={width}
        >
          {results.length === 0 ? (
            <p>No results found</p>
          ) : (
            <List spacing={4}>
              {results.map((result, index) => (
                <React.Fragment key={index}>
                  <ListItem
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
                </React.Fragment>
              ))}
            </List>
          )}
        </Box>
      )}
    </Box>
  );
};

export default LoggedInNav;
