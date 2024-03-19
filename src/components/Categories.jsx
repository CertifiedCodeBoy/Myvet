import React, { useContext, useState, useEffect } from "react";
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
import { ProductsContext } from "../contexts/ProductsContext";
import { Link } from "react-router-dom";
import { extendTheme } from '@chakra-ui/react'
import  {radioTheme}  from './Styles/radio.ts'

export const theme = extendTheme({
  components: { Radio: radioTheme },
})

const Categories = () => {
  const { category } = useParams();
  const useProducts = useContext(ProductsContext);
  const { products, loading } = useProducts;

  const [priceFilter, setPriceFilter] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (priceFilter) {
      const min = parseInt(priceFilter.substring(0, priceFilter.indexOf("-")));
      const max = parseInt(priceFilter.substring(priceFilter.indexOf("-") + 1));
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    setFilteredProducts(filtered);
  }, [products, priceFilter, category]);

  if (loading || !products) {
    return <div className="min-h-96">Loading...</div>;
  }
  return (
    <>
      <Box width={"100%"} overflow={"hidden"} my={8}>
        <Flex gap={4} direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "20%" }} p={4}>
            <Stack placeItems={"start"}>
              <Accordion allowToggle width={"100%"} mb={4}>
                <AccordionItem width={"100%"} border={"none"} position={"relative"}>
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
                        <RadioGroup
                          value={priceFilter}
                          onChange={setPriceFilter}
                        >
                          <Stack spacing={5} direction={"column"} >
                            <Radio  value="" defaultChecked={"true"}>
                              All
                            </Radio>
                            <Radio value="0-100">0 - 100 DA</Radio>
                            <Radio value="100-150">100 - 150 DA</Radio>
                            <Radio value="150-200">150 - 200 DA</Radio>
                            <Radio value="200">+ 200 DA</Radio>
                          </Stack>
                        </RadioGroup>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Stack>
            <Stack placeItems={"start"}>
              <Accordion allowToggle width={"100%"} mb={4}>
                <AccordionItem width={"100%"} border={"none"} position={"relative"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <Flex placeItems={"center"} direction={"row"} gap={3}>
                          <AccordionButton
                            _expanded={{ border: "none" }}
                            textAlign={"center"}
                          >
                            <h1 className="text-lg font-medium">Color</h1>
                            <AccordionIcon position={"absolute"} right={2} />
                          </AccordionButton>
                        </Flex>
                      </h2>
                      <AccordionPanel>
                        <RadioGroup colorScheme="gray">
                          <Stack spacing={5} direction={"column"}>
                            <Radio value="Men">Red</Radio>
                            <Radio value="Unisex">Green</Radio>
                            <Radio value="Women">Blue</Radio>
                          </Stack>
                        </RadioGroup>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Stack>
            <Stack placeItems={"start"}>
              <Accordion allowToggle width={"100%"} mb={4}>
                <AccordionItem width={"100%"} border={"none"} position={"relative"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <Flex placeItems={"center"} direction={"row"} gap={3}>
                          <AccordionButton
                            _expanded={{ border: "none" }}
                            textAlign={"center"}
                          >
                            <h1 className="text-lg font-medium">Size</h1>
                            <AccordionIcon position={"absolute"} right={2} />
                          </AccordionButton>
                        </Flex>
                      </h2>
                      <AccordionPanel>
                        <RadioGroup colorScheme={'brown'}>
                          <Stack spacing={5} direction={"column"}>
                            <Radio value="XS" defaultChecked>
                              XS
                            </Radio>
                            <Radio value="S">S</Radio>
                            <Radio value="M">
                              M
                            </Radio>
                            <Radio value="L">L</Radio>
                            <Radio value="XL">XL</Radio>
                            <Radio value="XXL">XXL</Radio>
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
        p={4}
        float={"none"}
        sx={{
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
        justify={"center"}
        align={"center"}
        maxH={"fit-content"}
        overflow={"hidden"}
      >
        <Image
          src={product.image}
          alt={`Image`}
          width={{base:"auto",xxl:"20%"}}
          aspectRatio={"1/1"}
          objectFit="contain"
        />
        <Stack maxWidth={'100%'} overflow={"hidden"} mt={4}>
          <Box >
            <h1 className="text-sm lg:text-md 2xl:text-lg whitespace-nowrap font-semibold text-[#111111]">
              {product.title.slice(0, 20) +
                (product.title.length > 20 ? "..." : "")}
            </h1>
          </Box>
          <Box>
            <h1 className="text-sm lg:text-md 2xl:text-lg font-medium text-[#111111]">
              {product.price} DA
            </h1>
          </Box>
        </Stack>
      </Card>
    </Link>
  );
};

export default Categories;
