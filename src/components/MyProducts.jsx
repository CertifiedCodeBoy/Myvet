import React, { useContext, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { ProductsContext } from "../contexts/ProductsContext";
import Loading from "./Loading";
//useparams is used to get the id of the product
import { useParams } from "react-router-dom";

const MyProducts = () => {
  const { deleteProduct, getArticles, userProducts, loading, error } = useContext(ProductsContext); // Get products and deleteProduct function from context
  const { id } = useParams(); // Get sellerId from params
  useEffect(() => {
    getArticles();
    console.log(userProducts);
  }, [ProductsContext]);

  const handleDelete = (productId) => {
    deleteProduct(productId);
    setTimeout(() => {
      getArticles();
    }, 500);
  };

  if (loading || !userProducts) {
    return <Loading />;
  }

  if (error) {
    return <Box>{error}</Box>;
  }

  return (
    <Box p={8}>
      <Heading mb={4}>My Products</Heading>
      <Flex flexWrap="wrap">
        {userProducts &&
          userProducts.map((product, index) => (
            <Box
              key={index}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              mr={4}
              mb={4}
              boxShadow="lg"
              position="relative"
            >
              <Link
                to={`/Product/${product._id}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  height="200px"
                  position="relative"
                  overflow="hidden"
                  borderRadius="lg"
                  mb={2}
                >
                  <Image
                    src={product.pic[0]}
                    alt={product.name}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    cursor="pointer"
                    borderRadius="lg"
                  />
                </Box>
                <Box>
                  <Heading fontSize="xl">{product.name}</Heading>
                  <Box mt={2}>{product.description}</Box>
                </Box>
              </Link>
              <Flex justifyContent="flex-end" mt={2}>
                <IconButton
                  icon={<FaTrashAlt />}
                  aria-label="Delete"
                  onClick={() => handleDelete(product._id)}
                  colorScheme="red"
                  variant="ghost"
                  mr={2}
                />
                <Button
                  as={Link}
                  to={`/EditPage/${product._id}`}
                  colorScheme="blue"
                  variant="ghost"
                >
                  <FaEdit />
                </Button>
              </Flex>
            </Box>
          ))}
      </Flex>
      <Flex justifyContent="flex-end">
        <Button
          as={Link}
          to={`/ItemPage/${id}`}
          zIndex={1}
          colorScheme="blue"
          size="lg"
          mt={4}
        >
          Add
        </Button>
      </Flex>
    </Box>
  );
};

export default MyProducts;
