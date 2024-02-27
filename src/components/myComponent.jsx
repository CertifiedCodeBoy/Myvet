import {
  ButtonGroup,
  Button,
  useBreakpointValue,
  Flex,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function MyComponent() {
  const direction = useBreakpointValue({ base: "column", sm: "row" });
  const width = useBreakpointValue({ base: "100%", sm: "auto" });

  return (
    <Stack placeItems={"center"}>
      <Menu isLazy placement="bottom" >
        {({isOpen}) => (
          <>
            <MenuButton w={"100%"} isActive={isOpen} _hover={
              {
                color: "white",
              }
            }  
            >
              Categories
              {!isOpen ? <ChevronDownIcon ml={1} /> : <ChevronUpIcon ml={1} />}
            </MenuButton>
            <Stack  display={isOpen ? 'block' : 'none'} >
              <Flex direction={'column'} gap={2} >
              <Link className="hover:text-white">
              Men's
              <ChevronRightIcon />
              </Link>
              <Link className="hover:text-white">
              Women's
              <ChevronRightIcon />
              </Link>
              <Link className="hover:text-white">
              kids
              <ChevronRightIcon />
              </Link>
              </Flex>
            </Stack>
          </>
        )}
      </Menu>
    </Stack>
  );
}

export default MyComponent;
