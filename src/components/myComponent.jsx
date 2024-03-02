import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";
import { Bag } from "phosphor-react";
import { Link } from "react-router-dom";

function MyComponent() {
  return (
    <Stack placeItems={"start"}>
      <Accordion allowToggle>
        <AccordionItem border={"none"}>
          {({ isExpanded }) => (
            <>
              <h2>
                <Flex placeItems={"center"} direction={"row"} gap={3}>
                  <Bag size={38} />
                  <AccordionButton
                    _expanded={{ border: "none" }}
                    textAlign={"center"}
                    _hover={{ color: "white" }}
                  >
                    <h1 className="text-lg font-medium">Categories</h1>
                    <AccordionIcon ml={8} />
                  </AccordionButton>
                </Flex>
              </h2>
              <AccordionPanel>
                <Stack placeItems={"start"} ml={8}>
                <Link to={"/Categories/men's clothing"} className={`text-black hover:text-white`}>
                  Men
                </Link>
                <Link to={"/Categories/jewelery"} className={`text-black hover:text-white`}>
                  Jewelry
                </Link>
                <Link to={"/Categories/women's clothing"} className={`text-black hover:text-white`}>
                  Women
                </Link>
                </Stack>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Stack>
  );
}

export default MyComponent;
