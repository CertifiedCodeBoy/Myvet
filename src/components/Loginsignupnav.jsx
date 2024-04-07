import React from "react";
import { Link } from "react-router-dom";
import { Container, Flex, Button, Image, Box } from "@chakra-ui/react";
import blacklogo from "../Assets/blacklogo.png";

const Loginsignupnav = () => {
  return (
    <div className="bg-[#e5e7eb] drop-shadow-md sticky top-0 z-50">
      <Flex position={"relative"} justify="center">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <Image
            src={blacklogo}
            alignSelf={"center"}
            aspectRatio={"1/1"}
            objectFit={"contain"}
            boxSize={{ base: "70px", sm: "70px" }}
          />
        </Link>
      </Flex>
    </div>
  );
};

export default Loginsignupnav;
