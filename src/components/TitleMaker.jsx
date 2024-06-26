import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";

const Slide = ({ image }) => {
  return (
    <>
      <Image src={image.src} alt={image.alt} width={"100%"} height={"100%"} />
    </>
  );
};

export default Slide;
