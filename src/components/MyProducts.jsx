import React, { useContext } from "react";
import { Box, Button, Flex, Heading, Image, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { ProductsContext } from "../contexts/ProductsContext";

const MyProducts = () => {
  const { products, deleteProduct } = useContext(ProductsContext); // Get products and deleteProduct function from context

  const handleDelete = (productId) => {
    deleteProduct(productId); // Call deleteProduct function from context
  };

  return (
    <Box p={8}>
      <Heading mb={4}>My Products</Heading>
      <Flex flexWrap="wrap">
        {products
          .filter((product) => product.category === "men's clothing") // Filter products by category
          .map((product) => (
            <Box
              key={product.id}
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
              <Link key={product.id} to={`/SellerItem/${product.id}`} style={{ textDecoration: "none" }}>
                <Box height="200px" position="relative" overflow="hidden" borderRadius="lg" mb={2}>
                  <Image src={product.image} alt={product.name} w="100%" h="100%" objectFit="contain" cursor="pointer" borderRadius="lg" />
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
                  onClick={() => handleDelete(product.id)}
                  colorScheme="red"
                  variant="ghost"
                  mr={2}
                />
                <Button
                  as={Link}
                  to={`/EditPage/${product.id}`}
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
          to="/ItemPage"
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
