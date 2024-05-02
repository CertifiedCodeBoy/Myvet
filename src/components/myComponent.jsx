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

function MyComponent({ onClose }) {
  return (
    <Stack placeItems={"start"}>
      <Accordion allowToggle>
        <AccordionItem border={"none"}>
          {({ isExpanded }) => (
            <>
              <h2>
                <Flex placeItems={"center"} direction={"row"} gap={3}>
                  <Bag size={35} />
                  <AccordionButton
                    _hover={{ bg: "transparent" }}
                    _expanded={{ border: "none", color: "white", bg: "transparent" }}
                    textAlign={"center"}
                  >
                    <h1 className="text-lg font-medium">Categories</h1>
                    <AccordionIcon ml={8} />
                  </AccordionButton>
                </Flex>
              </h2>
              <AccordionPanel>
                <Stack placeItems={"start"} ml={10}>
                  <Link
                    to={"/Categories/men's clothing"}
                    className={`text-black hover:text-white`}
                    onClick={onClose}
                  >
                    Men
                  </Link>
                  <Link
                    to={"/Categories/jewelery"}
                    className={`text-black hover:text-white`}
                    onClick={onClose}
                  >
                    Jewelry
                  </Link>
                  <Link
                    to={"/Categories/women's clothing"}
                    className={`text-black hover:text-white`}
                    onClick={onClose}
                  >
                    Women
                  </Link>
                  <Link
                    to={"/Categories/Kids clothing"}
                    className={`text-black hover:text-white`}
                    onClick={onClose}
                  >
                    Kids
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
