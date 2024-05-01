import React, { useContext } from "react";
import { Box, Heading, Skeleton, useMediaQuery } from "@chakra-ui/react";
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

  const deviceType = useMediaQuery([
    "(max-width: 640px)",
    "(max-width: 768px)",
    "(max-width: 1024px)",
  ]);

  return (
    <Splide
      hasTrack={false}
      className="relative my-8 p-4"
      options={{
        perPage: 5,
        gap: "1rem",
        perMove: 1,
        pagination: false,
        type: "slide",
        breakpoints: {
          1024: {
            perPage: 3,
          },
          768: {
            perPage: 3,
          },
          640: {
            perPage: 3,
            gap: "10rem",
          },
          480: {
            perPage: 2,
            gap: "2rem",
          },
          450: {
            perPage: 2,
            gap: "2rem",
          },
          400: {
            perPage: 2,
            gap: "5rem",
          },
          360: {
            perPage: 1,
            gap: "-5rem",
          },
          320: {
            perPage: 1,
            gap: "-2rem",
          },
          280: {
            perPage: 1,
            gap: "1rem",
          },
        },
      }}
    >
      <Box position={"relative"}>
        <Heading as={"h1"} size="xl" fontWeight={"medium"} mb={1} p={4}>
          {title}
        </Heading>
        <div className="splide__arrows absolute w-32 top-10 right-10 hidden md:block">
          <CaretLeft className="splide__arrow splide__arrow--prev w-10 h-10 p-1" />
          <CaretRight className="splide__arrow splide__arrow--next w-10 h-10 p-1" />
        </div>
      </Box>
      <SplideTrack>
        {filteredProducts &&
          filteredProducts.map((product, index) => (
            <SplideSlide key={index}>
              {deviceType[1] ? (
                <Card
                  mx={4}
                  px={6}
                  pt={4}
                  float={"none"}
                  sx={{
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                    borderRadius: "0px",
                  }}
                  maxW={"200px"}
                  minW={"200px"}
                  boxSize={"300px"}
                  m={4}
                >
                  <Link
                    to={`/Categories/${product.category}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <Image
                      src={product.image}
                      alt={`Image`}
                      maxH="200px"
                      minH={"200px"}
                      aspectRatio={"1/1"}
                      objectFit="contain"
                    />
                    <Box mt={"8"}>
                      <h1 className="text-xs font-md text-[#111111]">
                        {product.title.slice(0, 20) +
                          (product.title.length > 20 ? "..." : "")}
                      </h1>
                    </Box>
                    <Box>
                      <h1 className="text-xs font-bold text-[#111111]">
                        {product.price} DA
                      </h1>
                    </Box>
                  </Link>
                </Card>
              ) : (
                <Kard product={product} />
              )}
            </SplideSlide>
          ))}
      </SplideTrack>
    </Splide>
  );
};

const Kard = ({ product }) => {
  return (
    <Card
      px={8}
      py={4}
      my={4}
      mx={4}
      float={"none"}
      overflow={"hidden"}
      rounded={"4px"}
      maxH={"380px"}
      height={"380px"}
      minW={"200px"}
      width={"270px"}
    >
      <Link
        to={`/Categories/${product.category}`}
        onClick={() => window.scrollTo(0, 0)}
        className={`flex flex-col items-start `}
      >
        <Image
          src={product.image}
          alt={`Image`}
          maxH="250px"
          minH={"250px"}
          aspectRatio={"3/1"}
          maxW={"200px"}
          objectFit="contain"
        />
        <Box mt={"8"}>
          <h1 className="text-md font-medium text-[#111111]">
            {product.title.slice(0, 12) +
              (product.title.length > 8 ? "..." : "")}
          </h1>
        </Box>
        <Box my={4}>
          <h1 className="text-md font-bold text-[#111111]">
            {product.price} DA
          </h1>
        </Box>
      </Link>
    </Card>
  );
};

export default Section;