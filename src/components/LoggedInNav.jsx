import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Badge,
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
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

const LoggedInNav = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { isSeller } = useContext(SellerContext);
  const { user } = useContext(UserContext);
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
                      children={<MagnifyingGlass size={20} />}
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
                      _focus={{
                        border: "1px solid #111",
                        boxShadow: "lg",
                        cursor: "text",
                      }}
                      _hover={{
                        border: "1px solid #111",
                        boxShadow: "lg",
                        transition: "0.5s",
                      }}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      transition="width 0.5s" // Added transition for smoother animation
                    />
                  </InputGroup>
                </InputGroup>
              </Box>
            ) : window.screen.width >= 1024 ? (
              <Box pl={4} className="absolute left-20">
                <InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MagnifyingGlass size={20} />}
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
                      _focus={{
                        border: "1px solid #111",
                        boxShadow: "lg",
                        cursor: "text",
                      }}
                      _hover={{
                        border: "1px solid #111",
                        boxShadow: "lg",
                        transition: "0.5s",
                      }}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                    />
                  </InputGroup>
                </InputGroup>
              </Box>
            ) : null}
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
              <div
                className="flex items-center relative"
                onMouseEnter={() => {
                  onOpen();
                }}
                onMouseLeave={() => {}}
              >
                <Link to={`/${isSeller ? "SellerProfile" : "BuyerProfile"}`}>
                  <div className="flex items-center gap-2 ml-4">
                    {user ? (
                      <Avatar
                        name={user.name}
                        src={user.avatar}
                        size="sm"
                        bg="primary"
                        mr={2}
                      />
                    ) : (
                      <UserCircle size={34} />
                    )}
                    <span>{user ? user.name : "Profile"}</span>
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
                            name={user.name}
                            src={user.avatar}
                            size="sm"
                            bg="primary"
                            mr={2}
                          />
                        ) : (
                          <UserCircle size={34} />
                        )}
                        <span>{user ? user.name : "Profile"}</span>
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
                          isSeller ? (
                            <Link
                              to={`/SellerProfile`}
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
                          to={`/${isSeller ? "SellerProfile" : "BuyerProfile"}`}
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
    </nav>
  );
};

export default LoggedInNav;
