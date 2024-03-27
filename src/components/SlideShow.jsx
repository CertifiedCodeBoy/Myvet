import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { Box, Button, Flex, Heading, Image, Skeleton } from "@chakra-ui/react";
import slideshowImages from "../slideshowImages.json";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const Slideshow = () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    centeredSlides: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
  });
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
    <Box
      overflow="hidden"
      position="relative"
      h="600px"
      w="100%"
      className="swiper-container"
      display={"flex"}
    >
      <div className="swiper bg-gray-200 flex align-top justify-center">
        <div className="swiper-wrapper">
          {slideshowImages.map((image, index) => (
            <div className="swiper-slide relative" key={index}>
              <Image src={image.src} alt={image.alt} width={"100%"} />
              <Box
                bgGradient={"linear(to-t, black, transparent)"}
                position={"absolute"}
                zIndex={"50"}
                bottom={0}
                w={"100%"}
                height={40}
                textAlign={"center"}
              >
                <Heading color={"white"} mt={10}>{image.title}</Heading>
              </Box>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div>
      </div>
    </Box>
  );
};

export default Slideshow;
