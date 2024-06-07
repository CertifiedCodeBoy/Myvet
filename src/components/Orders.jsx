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
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    function fetchMyOrders() {
      fetch("http://localhost:5000/myorders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          jwt: Cookies.get("jwt"),
        },
      })
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 404) {
            const errorData = await response.json();
            throw new Error(errorData || "Not Found");
          } else if (response.status === 400) {
            const errorData_1 = await response.json();
            throw new Error(errorData_1.message || "Bad Request");
          } else {
            throw new Error("Request failed: " + response.statusText);
          }
        })
        .then((data) => {
          console.log("Orders retrieved successfully:", data.myOrders);
          setOrders(data.myOrders);
        })
        .catch((error) => {
          console.error("Failed to retrieve orders:", error.message);
        });
    }

    // Call the function to fetch orders
    fetchMyOrders();
  }, []);
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
    ? orders.filter((order) => order.status === status)
    : orders;
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
                <Box>{order.name ? order.name : "Product"}</Box>
                <Box>{order.date}</Box>
                <Box>${order.price}</Box>
                <Heading size="md">{order.status}</Heading>
              </Box>
            </CardBody>
            <CardFooter>
              <Box
                className="
                flex flex-col justify-between gap-4
                "
              >
                <Button colorScheme="blue">
                  <Link to={`/Product/${order.productId}`}>View</Link>
                </Button>
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
