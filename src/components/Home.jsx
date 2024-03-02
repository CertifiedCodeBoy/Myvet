import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { Link } from "react-router-dom";
import Slideshow from "./SlideShow";
import Discounts from "./Discounts";
import {
  Card,
  CardBody,
  Image,
  Flex,
  Box,
  Center,
  Container,
  HStack,
  Divider
} from "@chakra-ui/react";
import "./all.css";
import { Skeleton } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="font-main bg-white h-full pb-4">
      <div className="w-full">
        <section className="h-fit max-h-max bg-secondary flex items-center justify-center w-full overflow-hidden shrink">
          <Slideshow />
        </section>
        <Section title="Men" filter={(p) => p.category === "men's clothing"} />
        <Section title="Jewlery" filter={(p) => p.category === "jewelery"} />
        <Section title="Most Bought" filter={(p) => p.rating.count >= 120} />
        <Section title="Cheapest" filter={(p) => p.price <= 50} />
        <Section
          title="Women"
          filter={(p) => p.category === "women's clothing"}
        />
        <Section title="Popular" filter={(p) => p.rating.rate >= 3} />
      </div>
    </div>
  );
};

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
    <>
      <Box>
        <h1 className="text-2xl sm:text-4xl font-bold text-[#111111] text-left p-4 ml-2">
          {title}
        </h1>
      </Box>
      <Box className="overflow-auto pl-2 w-full mb-20">
        <Flex overflow="auto" justify={'start'} p={4}>
          <Box className="flex justify-start flex-nowrap gap-4">
            {filteredProducts.map((product) => (
              <Kard key={product.id} product={product} />
            ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const Kard = ({ product }) => {
  return (
    <Link to={`/Categories/${product.category}`}>
      <Card px={"8"} pt={4} float={'none'} sx={{
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
      }}>
        <Image
          src={product.image}
          alt={`Image`}
          maxH="300px"
          minH={"300px"}
          maxW="250px"
          aspectRatio={'1/1'}
          objectFit="contain"
        />
      <Box mt={'8'}>
        <h1 className="text-md font-medium text-[#111111]">
          {product.title.slice(0, 20) +
            (product.title.length > 20 ? "..." : "")}
        </h1>
      </Box>
      <Box my={4}>
        <h1 className="text-md font-bold text-[#111111]">{product.price} DA</h1>
      </Box>
            </Card>
    </Link>
  );
};

export default Home;
