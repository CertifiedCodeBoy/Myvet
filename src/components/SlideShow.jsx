import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { Box, Button, Flex, Image, Skeleton,Stack } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from "phosphor-react";
import slideshowImages from "../slideshowImages.json";

const Slideshow = () => {
  const { products, loading } = useContext(ProductsContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % slideshowImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slideshowImages]);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % slideshowImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + slideshowImages.length) % slideshowImages.length
    );
  };

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
    <div className="relative flex justify-center items-center container">
      <Stack
        position="relative"
        maxW="100%"
        maxH={{ base: "250px", sm: "500px" }}
        minH={{ base: "250px", sm: "500px" }}
        height={{ base: "250px", sm: "500px" }}
        p={4}
        overflow="hidden"
        align={'center'}
        justify={'center'}
      >
        <Box ratio={1}>
          <Image
            src={slideshowImages[currentImageIndex].src}
            alt={`Image ${currentImageIndex}`}
            objectFit="cover"
            mx="auto"
            aspectRatio={'1/1'}
            w="65%"
          />
        </Box>
      </Stack>
      <Flex position="absolute" w="100%" h="100%">
        <Button
          onClick={prevImage}
          variant="none"
          size="sm"
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
        >
          <CaretLeft size={38} weight="bold" />
        </Button>
        <Button
          onClick={nextImage}
          variant="none"
          size="sm"
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
        >
          <CaretRight size={38} weight="bold" />
        </Button>
      </Flex>
    </div>
  );
};

export default Slideshow;
