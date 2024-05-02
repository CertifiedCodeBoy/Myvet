import React, { useRef, useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Badge,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import MyComponent from "./myComponent";
import { List, House, ShoppingBag, Heart, ShoppingCart, ShoppingCartSimple, Gear, GearSix, TShirt, ArrowSquareOut } from "phosphor-react";
import blacklogo from "../Assets/blacklogo.png";
import { UserContext } from "../contexts/UserContext";

const NavSmall = () => {
  const Navigate = useNavigate();
  const { isLoggedIn, user } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <div className="flex justify-center">
      <Box
        bg={"gray.100"}
        rounded={"4px"}
        p={2}
        onClick={onOpen}
        ref={btnRef}
        cursor={"pointer"}
      >
        <List size={24} weight="bold" />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          sx={{
            backgroundColor: "#A0887F",
          }}
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex justify={"center"}>
              <ChakraLink as={ReactRouterLink} to="/" onClick={() => {
                onClose()
                window.scrollTo(0, 0)
              }}>
                <img
                  src={blacklogo}
                  alt="Logo"
                  className="w-24"
                />
              </ChakraLink>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex direction="column" placeItems={"start"} gap={"4"}>
              <h2>
                <Flex placeItems={"center"} direction={"row"} gap={7}>
                  <House size={27} />
                  <ChakraLink
                    as={ReactRouterLink}
                    to="/"
                    _hover={{ color: "white" }}
                    onClick={() => {
                      onClose()
                      window.scrollTo(0, 0)
                    }}
                  >
                    <h1 className="text-lg font-medium">Home</h1>
                  </ChakraLink>
                </Flex>
              </h2>
              <MyComponent onClose={onClose}  />
              {
                isLoggedIn &&
                <h2>
                  <Flex placeItems={"center"} direction={"row"} gap={7}>
                    <ShoppingBag size={27} />
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/Orders"
                      _hover={{ color: "white" }}
                      onClick={onClose}
                    >
                      <h1 className="text-lg font-medium">Orders</h1>
                    </ChakraLink>
                  </Flex>
                </h2>
              }
              {
                isLoggedIn &&
                <h2>
                  <Flex placeItems={"center"} direction={"row"} gap={7}>
                    <Heart size={27} />
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/Favorites"
                      _hover={{ color: "white" }}
                      onClick={onClose}
                    >
                      <h1 className="text-lg font-medium">My Wishlist</h1>
                    </ChakraLink>
                  </Flex>
                </h2>
              }
              {
                isLoggedIn &&
                <h2>
                  <Flex placeItems={"center"} direction={"row"} gap={7}>
                    <Box className="relative">
                    <ShoppingCartSimple size={27} />
                    <Badge colorScheme="red" borderRadius="full" px={1} position="absolute" top={-1} right={-1} fontSize={10}>
                      3
                    </Badge>
                    </Box>
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/Cart"
                      _hover={{ color: "white" }}
                      onClick={onClose}
                    >
                      <h1 className="text-lg font-medium">My Cart</h1>
                    </ChakraLink>
                  </Flex>
                </h2>
              }
              {
                isLoggedIn &&
                <h2>
                  <Flex placeItems={"center"} direction={"row"} gap={7}>
                    <GearSix size={27} />
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/Settings"
                      _hover={{ color: "white" }}
                      onClick={onClose}
                    >
                      <h1 className="text-lg font-medium">Settings</h1>
                    </ChakraLink>
                  </Flex>
                </h2>
              }
              {
                isLoggedIn && user.isSeller &&
                <h2>
                  <Flex placeItems={"center"} direction={"row"} gap={7}>
                    <TShirt size={27} />
                    <ChakraLink
                      as={ReactRouterLink}
                      to="/Admin"
                      _hover={{ color: "white" }}
                      onClick={onClose}
                    >
                      <h1 className="text-lg font-medium">My Products</h1>
                    </ChakraLink>
                  </Flex>
                </h2>
              }
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            {isLoggedIn ? 
            <Flex direction="row" justify={"center"} gap={4} w={"100%"}>
              <ChakraLink as={ReactRouterLink} to={user.isSeller? "/SellerProfile" : "/BuyerProfile"}>
                <Button
                  minW={"100px"}
                  bgColor={"#111"}
                  color={"#F2F2F2"}
                  _hover={{
                    backgroundColor: "#F2F2F2",
                    color: "#111",
                  }}
                  onClick={onClose}
                >
                  Profile
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/">
                <Button
                  color="red.600"
                  variant={"outline"}
                  borderColor={"red.600"}
                  _hover={{
                    backgroundColor: "#F2F2F2",
                    color: "#111",
                  }}
                  minW={"100px"}
                  onClick={
                    () => {
                      onClose()
                      localStorage.removeItem("jwt");
                      Navigate("/");
                      window.location.reload();
                    }
                  }
                >
                  Log out
                </Button>
              </ChakraLink>
            </Flex> :
            <Flex direction="row" justify={"center"} gap={4} w={"100%"}>
              <ChakraLink as={ReactRouterLink} to="/SignUp">
                <Button
                  minW={"100px"}
                  bgColor={"#111"}
                  color={"#F2F2F2"}
                  _hover={{
                    backgroundColor: "#F2F2F2",
                    color: "#111",
                  }}
                  onClick={onClose}
                >
                  Sign Up
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/LogIn">
                <Button
                  colorScheme="gray"
                  variant={"outline"}
                  borderColor={"white"}
                  _hover={{
                    backgroundColor: "#F2F2F2",
                    color: "#111",
                  }}
                  minW={"100px"}
                  onClick={onClose}
                >
                  Log in
                </Button>
              </ChakraLink>
            </Flex>}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavSmall;
