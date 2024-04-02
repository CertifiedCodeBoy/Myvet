import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight } from "phosphor-react";
import { OffersContext } from "../contexts/OffersContext";
import { useToast } from "@chakra-ui/react";

const Discounts = () => {
  const toast = useToast();
  const offers = useContext(OffersContext);
  const [currentOffer, setCurrentOffer] = useState(0);

  const nextOffer = () => {
    setCurrentOffer((prevOffer) => (prevOffer + 1) % offers.length);
  };

  useEffect(() => {
    const interval = setInterval(nextOffer, 3000);
    return () => clearInterval(interval); // This is important to clear the interval when the component unmounts
  }, [offers]);

  return (
    <div className="w-full h-20 sm:h-16 bg-primary  text-sm sm:text-md md:text-lg flex justify-center items-center shrink">
      {offers.length > 0 && (
        <div className="relative flex flex-col w-full justify-center items-center">
          <div
            className={`absolute w-full flex gap-1 justify-center items-center 
            `}
          >
            <p className="">
              {offers[currentOffer].title} ! {offers[currentOffer].description}
            </p>
            <p
              className="underline cursor-pointer hover:text-white"
              onClick={() => {
                if (toast.isActive) {
                  toast.closeAll();
                }
                navigator.clipboard.writeText(offers[currentOffer].code);
                toast({
                  title: "Copied!",
                  description: "Code Copied to clipboard.",
                  status: "success",
                  duration: 4000,
                  isClosable: false,
                });
              }}
            >
              {offers[currentOffer].code}{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discounts;
