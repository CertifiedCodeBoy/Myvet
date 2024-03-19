import {
  Box,
  Flex,
  Button,
  Link,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import whitelogo from "../Assets/whit_logo.png";

const HelpNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="black" color="white" h="70px">
      <Flex
        direction={["row"]}
        align="center"
        justify="space-between"
        p={4}
        className="container"
        mx={"auto"}
      >
        <Flex align="center" position={"relative"} gap={12}>
          <Link as={RouterLink} to="/" onClick={() => window.scrollTo(0, 0)}>
            <Image
              src={whitelogo}
              boxSize="60px"
              position={"absolute"}
              top={"-4"}
            />
          </Link>
          <Link
            as={RouterLink}
            to={"/Help"}
            fontSize="xl"
            ml={4}
            pl={4}
            borderLeft={"1px"}
            onClick={() => window.scrollTo(0, 0)}
          >
            Help Center
          </Link>
        </Flex>
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          <Link as={RouterLink} to="/SignUp">
            <Button
              colorScheme="gray"
              color={"white"}
              _hover={{ color: "white" }}
              variant="outline"
              mr={4}
            >
              Sign Up
            </Button>
          </Link>
          <Link as={RouterLink} to="/Login">
            <Button colorScheme="gray">Sign In</Button>
          </Link>
        </Flex>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          variant="outline"
          colorScheme="gray"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={"black"} p={4}>
            <DrawerCloseButton />
            <DrawerHeader color={"white"}>Menu</DrawerHeader>
            <DrawerBody>
              <Flex align="center">
                <Link as={RouterLink} to="/SignUp">
                  <Button
                    colorScheme="gray"
                    color={"white"}
                    _hover={{ color: "white" }}
                    onClick={onClose}
                    variant="outline"
                    mr={4}
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link as={RouterLink} to="/Login">
                  <Button colorScheme="gray" onClick={onClose}>
                    Sign In
                  </Button>
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default HelpNav;
