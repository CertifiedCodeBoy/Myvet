import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { Box, Button, Flex, Image, Skeleton } from "@chakra-ui/react";
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
    return (<Skeleton isLoaded={!loading} startColor="gray.200" endColor="gray.400" height="90px" />);
  }

  return (
    <div className="relative flex justify-center items-center container">
      <Box position="relative" maxH="500px" maxW="500px" overflow="hidden">
        <Image
          src={slideshowImages[currentImageIndex].src}
          alt={`Image ${currentImageIndex}`}
          maxH="50%"
          maxW="50% "
          objectFit="cover"
          aspectRatio={'1/1'}
        />
      </Box>
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
