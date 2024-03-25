import React, { useContext } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Skeleton,
  Card,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import { Heart } from "phosphor-react";

const Favorites = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Box>
      <Heading as="h1" size="xl" textAlign="center" my={10}>
        Favorites
      </Heading>
      <Section filter={(p) => p.category === "men's clothing"} />{" "}
    </Box>
  );
};

const Section = ({ filter }) => {
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
      <Box className="overflow-auto pl-2 w-full mb-20">
        <Flex overflow="auto" justify={"start"} p={4}>
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
        <Box my={4} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <h1 className="text-md font-bold text-[#111111]">
            {product.price} DA
          </h1>
          <Heart weight="fill" size={32} color="#FF0000"  />
        </Box>
      </Card>
    </Link>
  );
};

export default Favorites;
