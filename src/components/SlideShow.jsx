import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Skeleton,
  Spacer,
} from "@chakra-ui/react";
import slideshowImages from "../slideshowImages.json";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

//splidejs
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import Slide from "./TitleMaker";
import { ArrowSquareOut } from "phosphor-react";

const Slideshow = () => {
  const { products, loading } = useContext(ProductsContext);

  if (loading || !products) {
    return (
      <Skeleton
        isLoaded={!loading}
        startColor="gray.200"
        endColor="gray.400"
        height="200px"
      />
    );
  }

  return (
    <div className="relative">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          gap: "0",
          width: "100%",
          height: "500px",
          direction: "ltr",
          pagination: false,
          arrows: false,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 2,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {slideshowImages.map((image, index) => (
          <SplideSlide key={index}>
            <Slide image={image.src} />
          </SplideSlide>
        ))}
      </Splide>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={10}
        bgGradient={"linear(to-t, black, transparent)"}
        display={"flex"}
        flexDir={"column"}
        gap={8}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Heading
            color={"white"}
            textAlign={"center"}
            fontWeight={"bold"}
            size={"2xl"}
            mt={"60"}
          >
            <p>SUMMER SALE</p>
            UP TO 50% OFF!
          </Heading>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button colorScheme={"red"} size={"lg"} rounded={"full"}>
            SHOP NOW
          </Button>
          <Button
            colorScheme={"gray"}
            size={"lg"}
            rounded={"full"}
            ml={5}
            gap={4}
          >
            LEARN MORE
            <ArrowSquareOut size={24} />
          </Button>
        </Box>
        <Box>
          <p className="text-center text-white text-sm font-extralight">
            *Terms and conditions apply, see website for details.
          </p>
        </Box>
      </Box>
    </div>
  );
};

const SlideshowMobile = () => {
  const Logo = "src/Assets/whit_logo.png";

  return (
    //using splidejs
    <Box pos={"relative"} overflow={"hidden"}>
      <Image src="src/Assets/phone.jpg" alt="Mobile" width={"100%"} />
      <Box
        pos={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={10}
        bg={"linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"end"}
        height={"100%"}
      >
      
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} m={6}>
        <Button
          colorScheme={"green"}
          size={"md"}
          rounded={"full"}
          gap={4}
        >
          Download App
          <ArrowSquareOut size={24} />
        </Button>
      </Box>
      </Box>
    </Box>
  );
};

export default Slideshow;
export { SlideshowMobile };
