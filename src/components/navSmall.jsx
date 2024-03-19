import React, { useRef } from "react";
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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import MyComponent from "./myComponent";
import { List, House } from "phosphor-react";
import blacklogo from "../Assets/blacklogo.png";

const NavSmall = () => {
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
            <Flex direction="column" placeItems={"start"} gap={"2"}>
              <h2>
                <Flex placeItems={"center"} direction={"row"} gap={7}>
                  <House size={31} />
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
            </Flex>
          </DrawerBody>
          <DrawerFooter>
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
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavSmall;
