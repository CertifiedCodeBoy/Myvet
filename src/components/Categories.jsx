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
import { CategoriesContext } from "../contexts/CategoriesContext.jsx";
import { Link } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { radioTheme } from "./Styles/radio.ts";

export const theme = extendTheme({
  components: { Radio: radioTheme },
});

const Categories = () => {
  const { category } = useParams();
  const {
    categories,
    loading,
    error,
    fetchCategories,
    fetchPriceFilter,
  } = useContext(CategoriesContext);
  const [priceFilter, setPriceFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  useEffect(() => {
  fetchCategories(category);
  }, []);

  useEffect(() => {
    fetchPriceFilter(category, priceFilter, genderFilter, ageFilter);
  }, [ priceFilter, genderFilter, ageFilter]);
  
  if (loading) {
    return <div className="min-h-96">Loading...</div>;
  }
  
  if (error) {
    return <div className="min-h-96">An error occurred: {error}</div>;
  }
  

  return (
    <>
      <Box width={"100%"} overflow={"hidden"} my={8}>
        <Flex gap={4} direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "20%" }} p={4}>
            <Stack placeItems={"start"}>
              <Accordion allowToggle width={"100%"} mb={4}>
                <AccordionItem
                  width={"100%"}
                  border={"none"}
                  position={"relative"}
                >
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
                          onChange={(value) => {
                            setPriceFilter(value);
                          }}
                        >
                          <Stack spacing={5} direction={"column"}>
                            <Radio value="">Ascending</Radio>
                            <Radio value="d">Descending</Radio>
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
                <AccordionItem
                  width={"100%"}
                  border={"none"}
                  position={"relative"}
                >
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
                        <RadioGroup
                          value={genderFilter}
                          onChange={(value) => {
                            setGenderFilter(value);
                          }}
                        >
                          <Stack spacing={5} direction={"column"}>
                            <Radio value="">All</Radio>
                            <Radio value="Male">Male</Radio>
                            <Radio value="Female">Female</Radio>
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
              <Accordion allowToggle width={"100%"} mb={4}>
                <AccordionItem
                  width={"100%"}
                  border={"none"}
                  position={"relative"}
                >
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <Flex placeItems={"center"} direction={"row"} gap={3}>
                          <AccordionButton
                            _expanded={{ border: "none" }}
                            textAlign={"center"}
                          >
                            <h1 className="text-lg font-medium">Age</h1>
                            <AccordionIcon position={"absolute"} right={2} />
                          </AccordionButton>
                        </Flex>
                      </h2>
                      <AccordionPanel>
                        <RadioGroup
                          value={ageFilter}
                          onChange={(value) => {
                            setAgeFilter(value);
                          }}
                        >
                          <Stack spacing={5} direction={"column"}>
                            <Radio value="">All</Radio>
                            <Radio value="Kid">Kids</Radio>
                            <Radio value="Adult">Adults</Radio>
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
              {categories.map((product, index) => (
                <Box
                  key={index}
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
    <Link to={`/Product/${product._id}`}>
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
          src={product.pic[0]}
          alt={`Image`}
          width={{ base: "auto", xxl: "20%" }}
          aspectRatio={"1/1"}
          objectFit="contain"
        />
        <Stack maxWidth={"100%"} overflow={"hidden"} mt={4}>
          <Box>
            <h1 className="text-sm lg:text-md 2xl:text-lg whitespace-nowrap font-semibold text-[#111111]">
              {product.name.slice(0, 20) +
                (product.name.length > 20 ? "..." : "")}
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
