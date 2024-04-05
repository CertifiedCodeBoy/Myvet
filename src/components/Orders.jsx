import {
  Box,
  Heading,
  Card,
  CardBody,
  CardHeader,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import { CaretDown } from "phosphor-react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useState } from "react";

const Orders = () => {
  const [status, setStatus] = useState("");
  const pOrders = [
    {
      id: 1,
      name: "Order 1",
      date: "2021-08-01",
      total: 100,
      status: "Delivered",
    },
    {
      id: 2,
      name: "Order 2",
      date: "2021-08-02",
      total: 200,
      status: "Delivered",
    },
    {
      id: 3,
      name: "Order 3",
      date: "2021-08-03",
      total: 300,
      status: "shipped",
    },
    {
      id: 4,
      name: "Order 4",
      date: "2021-08-04",
      total: 400,
      status: "On the way",
    },
    {
      id: 5,
      name: "Order 5",
      date: "2021-08-05",
      total: 500,
      status: "Pending",
    },
  ];

  let filteredOrders = status
    ? pOrders.filter((order) => order.status === status)
    : pOrders;
  return (
    <div>
      <Box className="flex justify-between items-center">
        <Heading m={8}>Orders</Heading>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<CaretDown />}
            colorScheme="blue"
            m={8}
          >
            Filter
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                setStatus("");
              }}
            >
              All
            </MenuItem>
            <MenuItem
              onClick={() => {
                setStatus("Delivered");
              }}
            >
              Delivered
            </MenuItem>
            <MenuItem
              onClick={() => {
                setStatus("shipped");
              }}
            >
              Shipped
            </MenuItem>
            <MenuItem
              onClick={() => {
                setStatus("On the way");
              }}
            >
              On the way
            </MenuItem>
            <MenuItem
              onClick={() => {
                setStatus("Pending");
              }}
            >
              Pending
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box className="flex flex-col gap-4 m-8">
        {filteredOrders.map((order) => (
          <Card
            key={order.id}
            display={"flex"}
            flexDirection={"row"}
            bgColor={
              order.status === "Delivered"
                ? "green.200"
                : order.status === "shipped"
                ? "blue.200"
                : order.status === "On the way"
                ? "yellow.200"
                : "red.100"
            }
          >
            <CardHeader>{order.id}</CardHeader>
            <CardBody p={4}>
              <Box>
                <Box>{order.name}</Box>
                <Box>{order.date}</Box>
                <Box>${order.total}</Box>
                <Heading size="md">{order.status}</Heading>
              </Box>
            </CardBody>
            <CardFooter>
              <Box
                className="
                flex flex-col justify-between gap-4
                "
              >
                <Button colorScheme="blue">View</Button>
                {order.status === "Pending" ||
                order.status === "shipped" ||
                order.status === "On the way" ? (
                  <Button colorScheme="red">Cancel</Button>
                ) : order.status === "Delivered" ? (
                  <Button colorScheme="green">Return</Button>
                ) : null}
              </Box>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Orders;
