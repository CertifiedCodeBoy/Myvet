import React from "react";
import { Box, Button, Flex, Heading, Image, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa"; // Import trash and edit icons

const MyProducts = () => {
  // Dummy data for products (replace with actual data later)
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const handleDelete = (productId) => {
    // Implement delete functionality here
    console.log("Deleting product with ID:", productId);
  };

  return (
    <Box p={8}>
      <Heading mb={4}>My Products</Heading>
      <Flex flexWrap="wrap">
        {products.map((product) => (
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
              <Box height="150px" position="relative" overflow="hidden">
                <Image src={product.imageUrl} alt={product.name} w="100%" h="100%" objectFit="cover" cursor="pointer" />
              </Box>
            </Link>
            <Box mt={2}>
              <Heading fontSize="xl">{product.name}</Heading>
              <Box mt={2}>{product.description}</Box>
            </Box>
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
                to={`/ItemPage/${product.id}`} // Update this to the correct route for ItemPage
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
          to="/ItemPage" // Update this to the correct route for ItemPage
          zIndex={1} // Ensure the button doesn't overlap with other elements
          colorScheme="blue"
          size="lg"
          mt={4} // Add margin-top for spacing
        >
          Add
        </Button>
      </Flex>
    </Box>
  );
};

export default MyProducts;
