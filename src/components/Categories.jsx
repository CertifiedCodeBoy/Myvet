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
  Spacer,
  Box,
  Stack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import MyComponent from "./myComponent";

const Categories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="flex justify-center">
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
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
              <ChakraLink as={ReactRouterLink} to="/">
                <img
                  src="src/Assets/blacklogo.png"
                  alt="Logo"
                  className="w-24"
                />
              </ChakraLink>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex direction="column" gap={'40'} align={'center'}>
              <Stack gap="1" placeItems={'center'}>
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                textAlign={"center"}
                _hover={{
                  color: "#F2F2F2",
                }}
              >
                Home
              </ChakraLink>
              <MyComponent/>
              </Stack>
              <Spacer />
              <Flex direction="row" gap={2}>
              <ChakraLink as={ReactRouterLink} to="/SignUp">
                <Button
                  minW={"100px"}
                  bgColor={'#111'}
                  color={'#F2F2F2'}
                  _hover={{
                    backgroundColor: "#F2F2F2",
                    color: "#111",
                  }}
                >
                  Sign Up
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/LogIn">
                <Button
                  colorScheme="gray"
                  variant={"outline"}
                  border={'1px'}
                  borderColor={"white"}
                  _hover={{
                    backgroundColor: "#F2F2F2",
                    color: "#111",
                    borderColor: "#111",
                  }}
                  minW={"100px"}
                >
                  Log in
                </Button>
              </ChakraLink>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Categories;
