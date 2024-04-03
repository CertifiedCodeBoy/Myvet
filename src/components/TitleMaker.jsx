import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";

const Slide = ({ image, title }) => {
  return (
    <>
      <Image src={image} alt={title} width={"100%"} height={"100%"} />
    </>
  );
};

export default Slide;
