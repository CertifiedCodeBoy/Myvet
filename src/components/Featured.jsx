import { useContext, useState } from "react";
import { Box, Button, Heading, Spacer } from "@chakra-ui/react";
import { Card, Image, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Heart, Plus } from "phosphor-react";
import image2 from "../Assets/slideshowImages/2.jpeg";
import image5 from "../Assets/slideshowImages/5.jpeg";
import { UserContext } from "../contexts/UserContext";

const Featured = ({ title }) => {
  const [hoverStates, setHoverStates] = useState({});
  const [isClicked, setIsClicked] = useState({});
  const featuredImages = [image2, image5];
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <Heading size="xl" fontWeight={"medium"} mb={2} p={8}>
        {title}
      </Heading>
      <Flex
        justify={"center"}
        align={"center"}
        gap={2}
        flex={1}
        direction={{ base: "column", md: "row" }}
      >
        {featuredImages.map((image, index) => (
          <Card
            key={index}
            width={"auto"}
            height={"auto"}
            mx={4}
            p={0}
            pos={"relative"}
            onMouseEnter={() =>
              setHoverStates((prev) => ({ ...prev, [index]: true }))
            }
            onMouseLeave={() =>
              setHoverStates((prev) => ({ ...prev, [index]: false }))
            }
          >
            <Image
              src={image}
              width={"100%"}
              height={"auto"}
              maxHeight={"900px"}
            />
            <Flex
              p={4}
              position={"absolute"}
              top={0}
              left={0}
              zIndex={10}
              w={"100%"}
              h={"100%"}
              bg={"rgba(0,0,0,0.4)"}
              backdropFilter={"blur(5px)"}
              opacity={hoverStates[index] ? 1 : 0}
              transition={"opacity 0.5s"}
            >
              <Box p={4}>
                <Text color={"white"} fontSize={"3xl"}>
                  {index === 0 ? "Cutton Hoodies" : "Our Latest Collection"}
                </Text>
                <Link
                  to={
                    index === 0
                      ? `/Categories/men's clothing`
                      : `/Categories/women's clothing`
                  }
                >
                  <Text color={"white"} fontSize={"xl"} textDecor={"underline"}>
                    {index === 0 ? "Shop now" : "Discover More"}
                  </Text>
                </Link>
              </Box>
              <Spacer />
              <Box p={4} display={"flex"} flexDir={"column"}>
                <Button
                  colorScheme={"white"}
                  _hover={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                  onClick={() =>
                    isLoggedIn
                      ? setIsClicked((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      : (window.location.href = "/Login")
                  }
                >
                  {isLoggedIn ? (
                    isClicked[index] ? (
                      <Heart size={24} color={"red"} weight="fill" />
                    ) : (
                      <Heart size={24} color={"white"} />
                    )
                  ) : (
                    <Heart size={24} color={"white"} />
                  )}
                </Button>
                <Button
                  colorScheme={"white"}
                  _hover={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  <Plus size={24} color={"white"} />
                </Button>
              </Box>
            </Flex>
          </Card>
        ))}
      </Flex>
    </div>
  );
};

export default Featured;
