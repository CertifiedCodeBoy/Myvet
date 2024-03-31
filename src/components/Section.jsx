import React, { useRef, useEffect, useContext } from "react";
import { Box, Flex, Heading, Skeleton } from "@chakra-ui/react";
import { ProductsContext } from "../contexts/ProductsContext";
import { Link } from "react-router-dom";
import { Card, Image } from "@chakra-ui/react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { CaretLeft, CaretRight } from "phosphor-react";

const Section = ({ title, filter }) => {
  const useProducts = () => useContext(ProductsContext);
  const { products, loading } = useProducts();
  
  if (loading || !products) {
    return (
      <Skeleton
        isLoaded={!loading}
        startColor="gray.200"
        endColor="gray.300"
        height="90px"
      />
    );
  }

  const filteredProducts = products.filter(
    (product) => product.category != "electronics" && filter(product)
  );

  return (
    <Splide
      hasTrack={false}
      className="relative my-8 p-4"
      options={{
        perPage: 4,
        perMove: 1,
        gap: "0",
        pagination: false,
        type: "loop",
        breakpoints: {
          640: {
            perPage: 2,
            gap: "20rem",
          },
          768: {
            perPage: 2,
            gap: "1rem",
          },
          1024: {
            perPage: 3,
            gap: "1rem",
          },
        },
      }}
    >
      <Box position={"relative"}>
        <Heading size="xl" mb={4} p={4}>
          {title}
        </Heading>
        <div className="splide__arrows absolute w-28 top-10 right-10">
          <CaretLeft size={40} className="splide__arrow splide__arrow--prev" />
          <CaretRight size={40} className="splide__arrow splide__arrow--next" />
        </div>
      </Box>
      <SplideTrack>
        {filteredProducts &&
          filteredProducts.map((product, index) => (
            <SplideSlide key={index}>
              <Card
                mr={{ base: "8", md: "10" }}
                px={6}
                pt={4}
                float={"none"}
                sx={{
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                }}
                maxW={"300px"}
                border={"2px"}
                minW={"300px"}
              >
                <Link
                  to={`/Categories/${product.category}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Image
                    src={product.image}
                    alt={`Image`}
                    maxH="300px"
                    minH={"300px"}
                    maxW="250px"
                    aspectRatio={"1/1"}
                    objectFit="contain"
                  />
                  <Box mt={"8"}>
                    <h1 className="text-md font-medium text-[#111111]">
                      {product.title.slice(0, 20) +
                        (product.title.length > 20 ? "..." : "")}
                    </h1>
                  </Box>
                  <Box my={4}>
                    <h1 className="text-md font-bold text-[#111111]">
                      {product.price} DA
                    </h1>
                  </Box>
                </Link>
              </Card>
            </SplideSlide>
          ))}
      </SplideTrack>
    </Splide>
  );
};

const Kard = ({ product }) => {
  return (
    <Link
      to={`/Categories/${product.category}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <Card
        px={"8"}
        pt={4}
        float={"none"}
        sx={{
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
      >
        <Image
          src={product.image}
          alt={`Image`}
          maxH="300px"
          minH={"300px"}
          maxW="250px"
          aspectRatio={"1/1"}
          objectFit="contain"
        />
        <Box mt={"8"}>
          <h1 className="text-md font-medium text-[#111111]">
            {product.title.slice(0, 20) +
              (product.title.length > 20 ? "..." : "")}
          </h1>
        </Box>
        <Box my={4}>
          <h1 className="text-md font-bold text-[#111111]">
            {product.price} DA
          </h1>
        </Box>
      </Card>
    </Link>
  );
};

export default Section;
