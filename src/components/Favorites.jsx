import React, { useState, useContext,useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Skeleton,
  Card,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { UserContext } from "../contexts/UserContext";

const Favorites = () => {
  const { favorites, loading, error, fetchFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    fetchFavorites();
  }, [FavoritesContext]);

  if (loading) {
    return (
      <Box>
        <Skeleton
          isLoaded={!loading}
          startColor="gray.200"
          endColor="gray.300"
          height="90px"
        />
      </Box>
    );
  }

  if (!favorites || favorites.length === 0) {
    return (
      <Box>
        <Heading as="h1" size="xl" textAlign="center" my={10}>
          Favorites
        </Heading>
        <Text textAlign="center">No favorites yet</Text>
      </Box>
    );
  }


  const favoriteProducts = favorites;

  return (
    <Box>
      <Heading as="h1" size="xl" textAlign="center" my={10}>
        Favorites
      </Heading>
      {/* <Section filter={(p) => p.category === "men's clothing"} />{" "} */}
      <Box
        className="overflow-auto pl-2 w-full mb-20"
        display="flex"
        justifyContent="start"
        p={4}
      >
        {favoriteProducts &&
          favoriteProducts.map((product, index) => (
            <Kard key={index} product={product} />
          ))}
      </Box>
    </Box>
  );
};

// const Section = ({ filter }) => {
//   const useProducts = () => useContext(ProductsContext);
//   const { products, loading } = useProducts();

//   if (loading || !products) {
//     return (
//       <Skeleton
//         isLoaded={!loading}
//         startColor="gray.200"
//         endColor="gray.300"
//         height="90px"
//       />
//     );
//   }

//   const filteredProducts = products.filter(
//     (product) => product.category != "electronics" && filter(product)
//   );
//   return (
//     <>
//       <Box className="overflow-auto pl-2 w-full mb-20">
//         <Flex overflow="auto" justify={"start"} p={4}>
//           <Box className="flex justify-start flex-nowrap gap-4">
//             {filteredProducts.map((product) => (
//               <Kard key={product.id} product={product} />
//             ))}
//           </Box>
//         </Flex>
//       </Box>
//     </>
//   );
// };

const Kard = ({ product }) => {
  const { favorites, isFavorite, addFavorite, fetchFavorites } = useContext(FavoritesContext);

  const handleDelete = (Id) => {
    addFavorite(Id);
    setTimeout(() => {
      fetchFavorites();
    }, 500);
  };


  return (
    <>
    { favorites.length != 0 &&
    <Card
        px={"8"}
        pt={4}
        mx={4}
        float={"none"}
        sx={{
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
      >
        <Link to={`/Product/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
        <Image
          src={product.pic}
          alt={`Image`}
          maxH="300px"
          minH={"300px"}
          maxW="250px"
          aspectRatio={"1/1"}
          objectFit="contain"
        />
        <Box mt={"8"}>
          <h1 className="text-md font-medium text-[#111111]">
            {product.name.slice(0, 20) +
              (product.name.length > 20 ? "..." : "")}
          </h1>
        </Box>
        </Link>
        <Box
          my={4}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <h1 className="text-md font-bold text-[#111111]">
            {product.price} DA
          </h1>
          <Button
            bg={"#F3F4F6"}
            _hover={{ bg: "#E5E7EB" }}
            _active={{ bg: "#E5E7EB" }}
            _focus={{ boxShadow: "none" }}
            borderRadius={"full"}
            p={2}
            onClick={() => {
              handleDelete(product.id)
            }}
          >
            Remove
          </Button>
        </Box>
      </Card>
  }
  </>
  );
};

export default Favorites;
