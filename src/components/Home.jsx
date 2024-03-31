import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import Slideshow from "./SlideShow";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import "./all.css";
import { Skeleton } from "@chakra-ui/react";
import Section from "./Section";
import Featured from "./Featured";
import UseMobile from "./UseMobile";

const Home = () => {
  const { products, loading } = useContext(ProductsContext);

  if (loading || !products) {
    return (
      <>
        <Flex direction={"column"} gap={8} my={8} scrollBehavior={"smooth"}>
          <Skeleton
            isLoaded={!loading}
            startColor="gray.200"
            endColor="gray.400"
            height="300px"
          />
          <Flex direction={"column"} gap={4}>
            <Flex justify={"space-between"} align={"center"} py={4}>
              <Heading ml={4} fontWeight={"semibold"}>
                Loading ...
              </Heading>
            </Flex>
            <Grid
              rowGap={4}
              templateColumns={"repeat(5,1fr)"}
              columnGap={4}
              overflowX={"scroll"}
              px={4}
            >
              <Skeleton
                as={GridItem}
                isLoaded={!loading}
                startColor="gray.200"
                endColor="gray.400"
                height={"400px"}
                width={"300px"}
              />
              <Skeleton
                as={GridItem}
                isLoaded={!loading}
                startColor="gray.200"
                endColor="gray.400"
                height="400px"
                w={"300px"}
              />
              <Skeleton
                as={GridItem}
                isLoaded={!loading}
                startColor="gray.200"
                endColor="gray.400"
                height="400px"
                w={"300px"}
              />
              <Skeleton
                as={GridItem}
                isLoaded={!loading}
                startColor="gray.200"
                endColor="gray.400"
                height="400px"
                w={"300px"}
              />
              <Skeleton
                isLoaded={!loading}
                startColor="gray.200"
                endColor="gray.400"
                height="400px"
                w={"300px"}
              />
            </Grid>
          </Flex>
          <Flex direction={"column"} gap={4}>
            <Flex justify={"space-between"} align={"center"} py={4}>
              <Heading ml={4} fontWeight={"semibold"}>
                Loading ...
              </Heading>
            </Flex>
            <Grid
              rowGap={4}
              templateColumns={"repeat(5,1fr)"}
              columnGap={4}
              overflowX={"scroll"}
              px={4}
            >
              <Skeleton
                as={GridItem}
                isLoaded={!loading}
                startColor="gray.200"
                endColor="gray.400"
                height={"400px"}
                width={"300px"}
              />
              <Skeleton
                as={GridItem}
                isLoaded={!loading}
                startColor="gray.200"
                endColor="gray.400"
                height="400px"
                w={"300px"}
              />
              <Skeleton
                as={GridItem}
                isLoaded={!loading}
                startColor="gray.200"
                endColor="gray.400"
                height="400px"
                w={"300px"}
              />
              <Skeleton
                as={GridItem}
                isLoaded={!loading}
                startColor="gray.200"
                endColor="gray.400"
                height="400px"
                w={"300px"}
              />
              <Skeleton
                isLoaded={!loading}
                startColor="gray.200"
                endColor="gray.400"
                height="400px"
                w={"300px"}
              />
            </Grid>
          </Flex>
          <Skeleton
            isLoaded={!loading}
            startColor="gray.200"
            endColor="gray.400"
            height="300px"
          />
        </Flex>
      </>
    );
  }

  return (
    <div className="font-main bg-gray-100 h-full pb-4">
      <div className="w-full">
        {window.innerWidth > 768 ? <Slideshow /> : <UseMobile />}
        <Section title="Men" filter={(p) => p.category === "men's clothing"} />
        <Featured title="Featured" />
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

export default Home;
