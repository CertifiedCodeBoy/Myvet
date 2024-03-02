import React, { useContext } from "react";
import {
  Box,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Radio,
  RadioGroup,
  Card,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {ProductsContext} from "../contexts/ProductsContext";
import { Link } from "react-router-dom";

const Categories = () => {
  const { category } = useParams();
  const useProducts = useContext(ProductsContext);
  const { products, loading } = useProducts;

  if (loading || !products) {
    return <div className="min-h-full">Loading...</div>;
  }

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <>
      <Box
        w={"100%"}
        overflow={"hidden"}
      >
        <Flex gap={4} direction={{base:'column', md:'row'}}>
          <Box w={{base:"100%", md:'15%'}} p={4}>
            <Stack placeItems={"start"}>
              <Accordion allowToggle w={"100%"} mb={4}>
                <AccordionItem W={"100%"} border={"none"} position={"relative"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <Flex placeItems={"center"} direction={"row"} gap={3}>
                          <AccordionButton
                            _expanded={{ border: "none" }}
                            textAlign={"center"}
                          >
                            <h1 className="text-lg font-medium">Price</h1>
                            <AccordionIcon position={"absolute"} right={2} />
                          </AccordionButton>
                        </Flex>
                      </h2>
                      <AccordionPanel>
                        <RadioGroup colorScheme="gray">
                          <Stack spacing={5} direction={"column"}>
                            <Radio value="0-100" variant="square">
                              0 - 1000 DA
                            </Radio>
                            <Radio value="1000-1500">1000 - 1500 DA</Radio>
                            <Radio value="1500-2000">1500 - 2000 DA</Radio>
                            <Radio value="+2000">+ 2000 DA</Radio>
                          </Stack>
                        </RadioGroup>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Stack>
            <Stack placeItems={"start"}>
              <Accordion allowToggle w={"100%"} mb={4}>
                <AccordionItem W={"100%"} border={"none"} position={"relative"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <Flex placeItems={"center"} direction={"row"} gap={3}>
                          <AccordionButton
                            _expanded={{ border: "none" }}
                            textAlign={"center"}
                          >
                            <h1 className="text-lg font-medium">Gender</h1>
                            <AccordionIcon position={"absolute"} right={2} />
                          </AccordionButton>
                        </Flex>
                      </h2>
                      <AccordionPanel>
                        <RadioGroup colorScheme="gray">
                          <Stack spacing={5} direction={"column"}>
                            <Radio value="Men">Men</Radio>
                            <Radio value="Women">Women</Radio>
                            <Radio value="Unisex">Unisex</Radio>
                          </Stack>
                        </RadioGroup>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Stack>
            <Stack placeItems={"start"}>
              <Accordion allowToggle w={"100%"} mb={4}>
                <AccordionItem W={"100%"} border={"none"} position={"relative"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <Flex placeItems={"center"} direction={"row"} gap={3}>
                          <AccordionButton
                            _expanded={{ border: "none" }}
                            textAlign={"center"}
                          >
                            <h1 className="text-lg font-medium">Children</h1>
                            <AccordionIcon position={"absolute"} right={2} />
                          </AccordionButton>
                        </Flex>
                      </h2>
                      <AccordionPanel>
                        <RadioGroup colorScheme="gray">
                          <Stack spacing={5} direction={"column"}>
                            <Radio value="0-100" variant="square">
                              Boys
                            </Radio>
                            <Radio value="1000-1500">Girls</Radio>
                          </Stack>
                        </RadioGroup>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Stack>
          </Box>
          <Box flex="1" p={4}>
            <Flex wrap="wrap" justify="start">
              {filteredProducts.map((product) => (
                <Box
                  key={product.id}
                  w={{ base: "100%", sm: "50%", md: "33%", lg: "25%" }}
                  border={"1px solid #f2f2f2"}
                  p={2}
                >
                  <Kard product={product} />
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const Kard = ({ product }) => {
  return (
    <Link to={`/Product/${product.id}`}>
      <Card
        px={4}
        pt={4}
        float={"none"}
        sx={{
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
        justify={"center"}
        align={"center"}
        maxH={"400px"}
        overflow={"hidden"}
      >
        <Image
          src={product.image}
          alt={`Image`}
          w={"auto"}
          aspectRatio={"1/1"}
          objectFit="contain"
        />
        <Stack my={4} overflow={'hidden'}>
        <Box  >
          <h1 className="text-md whitespace-nowrap font-medium text-[#111111]">
            {product.title.slice(0, 20) +
              (product.title.length > 20 ? "..." : "")}
          </h1>
        </Box>
        <Box>
          <h1 className="text-md font-bold text-[#111111]">
            {product.price} DA
          </h1>
        </Box>
        </Stack>
      </Card>
    </Link>
  );
};

export default Categories;
