import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight, Copy } from "phosphor-react";
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
    return () => clearInterval(interval);
  }, [offers]);

  return (
    <div className="w-full py-5 bg-secondary text-sm sm:text-md md:text-lg flex justify-center items-center shrink">
      {offers.length > 0 && (
        <div className="relative flex flex-col w-full justify-center items-center">
          <div
            className={`absolute w-full flex gap-1 justify-center items-center 
            `}
          >
            <p className="text-xs font-medium flex flex-col md:block md:text-md ">
              <span className="">{offers[currentOffer].title} ! </span>
              <span className="font-normal">
                {offers[currentOffer].description.slice(0, 50) + "..."}{" "}
              </span>
            </p>
            <p
              className="underline cursor-pointer text-xs md:text-md flex bg-gray-200 hover:bg-white ml-4 rounded-md p-1 px-2 justify-center items-center gap-1"
              onClick={() => {
                if (toast.isActive) {
                  toast.closeAll();
                }
                // copy to clipboard
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(offers[currentOffer].code);
                } else if (document.execCommand) {
                  const textarea = document.createElement('textarea');
                  textarea.value = offers[currentOffer].code;
                  document.body.appendChild(textarea);
                  textarea.select();
                  document.execCommand('copy');
                  document.body.removeChild(textarea);
                } else {
                  console.error('Copying to clipboard not supported');
                }
                  toast({
                  title: "Copied!",
                  description: "Code Copied to clipboard.",
                  status: "success",
                  duration: 4000,
                  isClosable: false,
                  position: "top",
                });
              
              }}
            >
              <Copy size={20} className="cursor-pointer" />
              {offers[currentOffer].code}{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discounts;
