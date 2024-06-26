import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Badge, Box, Divider, Flex, Heading, Spacer } from "@chakra-ui/layout";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  CaretLeft,
  CaretRight,
  Gear,
  Heart,
  ShoppingBag,
  SignOut,
  User,
} from "phosphor-react";
import { Avatar } from "@chakra-ui/avatar";
import { useToast } from "@chakra-ui/toast";
import Favorites from "./Favorites";
import { UserContext } from "../contexts/UserContext";
import { Skeleton } from "@chakra-ui/react";
import { SellerContext } from "../contexts/SellerContext";
import MyProducts from "./MyProducts"; // Import MyProducts component
import Cookies from "js-cookie";
import Settings from "./Settings";
import Cart from "./Cart";

const SellerProfile = () => {
  const toast = useToast();
  const [selected, setSelected] = useState(1);
  const { user, isLoading, setIsLoggedIn } = useContext(UserContext);
  const [isExpanded, setIsExpanded] = useState(
    () => typeof window !== "undefined" && false
  );
  const [focused, setFocused] = useState(false);
  const [p1, setP1] = useState(true); // Seller profile selected by default
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);
  const [p4, setP4] = useState(false);
  const [p5, setP5] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isSeller } = useContext(SellerContext);
  const navigate = useNavigate();
  const cancelRef = useRef();

  const handleLogout = () => {
    setIsLoggedIn(false);
    Cookies.remove("jwt");
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    navigate("/");
    onClose();
  };

  if (isLoading || !user) {
    return <Skeleton height="20px" />;
  }

  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      position={"relative"}
      height={"91.5vh"}
      overflow={"hidden"}
    >
      <Box
        width={{ base: "100%", md: isExpanded ? "20%" : "90px" }}
        bg={"#F2F2F2"}
        height={{ base: isExpanded ? "100%" : "10px", md: "100%" }}
        borderRight={"2px"}
        borderColor={"#E5E5E5"}
        pt={20}
        pb={isExpanded ? 20 : 0}
        overflow={"hidden"}
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          position={"absolute"}
          top={4}
          left={4}
        >
          {isExpanded ? <CaretLeft size={20} /> : <CaretRight size={20} />}
        </Button>
        <Box>
          <Flex
            cursor={"pointer"}
            gap={8}
            align={"center"}
            mb={4}
            pl={8}
            py={4}
            onClick={() => {
              setSelected(1);
              setP1(true);
              setP2(false);
              setP3(false);
              setP4(false);
              setIsExpanded(false);
            }}
            bg={selected === 1 ? "#BBB" : "initial"}
            borderRight={selected === 1 ? "2px solid black" : "none"}
          >
            <User size={20} weight="bold" />
            <Heading
              fontSize={20}
              fontWeight={"regular"}
              display={isExpanded ? "" : "none"}
            >
              Seller Info
            </Heading>
          </Flex>
          <Flex
            cursor={"pointer"}
            onClick={() => {
              setSelected(2);
              setP1(false);
              setP2(true);
              setP3(false);
              setP4(false);
              setIsExpanded(false);
            }}
            gap={8}
            align={"center"}
            mb={4}
            pl={8}
            py={4}
            bg={selected === 2 ? "#BBB" : "initial"}
            borderRight={selected === 2 ? "2px solid black" : "none"}
          >
            <Heart size={20} weight="bold" />
            <Heading
              fontSize={20}
              fontWeight={"regular"}
              display={isExpanded ? "" : "none"}
            >
              Favorites
            </Heading>
          </Flex>
          <Flex
            cursor={"pointer"}
            onClick={() => {
              setSelected(3);
              setP1(false);
              setP2(false);
              setP3(true);
              setP4(false);
              setIsExpanded(false);
            }}
            gap={8}
            align={"center"}
            mb={4}
            pl={8}
            py={4}
            bg={selected === 3 ? "#BBB" : "initial"}
            borderRight={selected === 3 ? "2px solid black" : "none"}
          >
            <ShoppingBag size={20} weight="bold" />
            <Heading
              fontSize={20}
              fontWeight={"regular"}
              display={isExpanded ? "" : "none"}
            >
              Cart
            </Heading>
          </Flex>
        </Box>
        <Spacer />
        <Flex
          cursor={"pointer"}
          onClick={onOpen}
          gap={8}
          align={"center"}
          mb={8}
          pl={8}
          py={4}
          display={{ base: "none", md: "flex" }}
          bg={"red.600"}
          _hover={{ bg: "red.500" }}
          color={"white"}
          rounded={isExpanded ? "md" : "0"}
          width={isExpanded ? "80%" : "100%"}
          mx={isExpanded ? "auto" : "0"}
        >
          <SignOut size={20} weight="bold" />
          <Heading
            fontSize={20}
            fontWeight={"regular"}
            display={isExpanded ? "" : "none"}
          >
            Log Out
          </Heading>
        </Flex>
      </Box>
      <Box width={"100%"} height={"100%"} overflow={"scroll"}>
        {p1 && (
          <Box p={8} pb={0} width={"100%"}>
            <Heading>Seller Info</Heading>
            <Box p={4}>
              <Flex
                mt={8}
                align={"center"}
                gap={{ base: "0", md: "2" }}
                direction={{ base: "column", md: "row" }}
              >
                <Avatar size="2xl" name={user.firstName} src={user.pic} />
                <Flex direction={"column"}>
                  <Heading mt={{ base: 8, md: 0 }} ml={{ base: 0, md: 8 }}>
                    {user.firstName}
                  </Heading>
                </Flex>
                {user.isSeller ? (
                  <Badge mt={{ base: 0, md: 4 }} colorScheme="red">
                    Seller
                  </Badge>
                ) : (
                  <Badge mt={{ base: 0, md: 4 }} colorScheme="green">
                    Customer
                  </Badge>
                )}
                {/* <Flex gap={4} mt={{ base: 4, md: 0 }}>
                  <Button
                    mt={{ base: 2, md: 4 }}
                    position={"relative"}
                    right={{ base: 0, md: -24 }}
                    display={!focused ? "none" : ""}
                    onClick={() => {
                      setP1(true);
                      setP2(false);
                      setP3(false);
                      setP4(false);
                      setP5(false); // *************************************************************
                      setFocused(!focused);
                      toast({
                        title: "Changes were not saved",
                        status: "error",
                      });
                    }}
                    colorScheme="red"
                  >
                    Cancel
                  </Button>
                  <Button
                    mt={{ base: 2, md: 4 }}
                    position={"relative"}
                    right={{ base: 0, md: -24 }}
                    display={!focused ? "none" : ""}
                    onClick={() => {
                      setP1(true);
                      setP2(false);
                      setP3(false);
                      setP4(false);
                      setP5(false); // *************************************************************
                      setFocused(!focused);
                      toast({
                        title: "Changes saved successfully !",
                        status: "success",
                      });
                    }}
                    colorScheme="green"
                  >
                    Save
                  </Button>
                </Flex> */}
                <Button
                  mt={{ base: 2, md: 4 }}
                  position={"relative"}
                  right={-20}
                  onClick={() => {
                    setP1(true);
                    setP2(false);
                    setP3(false);
                    setP4(false);
                    setP5(!p5);
                  }}
                  bg={"#F2F2F2"}
                  color={"#111"}
                  _hover={{
                    bg: "#111",
                    color: "#F2F2F2",
                    transition: "0.5s",
                  }}
                >
                  <Gear size={20} />
                </Button>
              </Flex>
            </Box>
            <Divider mt={8} />
            {!p5 && (
              <Box width={"100%"} p={0}>
                <MyProducts />{" "}
                {/* Include MyProducts component within Seller Info */}
              </Box>
            )}
          </Box>
        )}
        {p2 && <Favorites />}
        {p3 && <Cart />}
        {p5 && <Settings setP5={setP5} />}
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Log Out
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You are about to be logged out.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleLogout} ml={3}>
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default SellerProfile;
