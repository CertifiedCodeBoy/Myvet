import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight } from "phosphor-react";
import { OffersContext } from "../contexts/OffersContext";

const Discounts = () => {
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
    <div className="w-full h-20 sm:h-16 my-2 bg-primary py-4 text-sm sm:text-md md:text-lg flex justify-center items-center shrink">
      {offers.length > 0 && (
        <div className="relative flex flex-col w-full justify-center items-center">
          <div
            className={`absolute w-full flex flex-col justify-center items-center 
            `}
          >
            <p className="font-semibold">{offers[currentOffer].title}</p>
            <p className="">
              <Link to="/SignUp" className="underline">
                Sign up
              </Link>{" "}
              {offers[currentOffer].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discounts;