import React, {useEffect,  useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight } from "phosphor-react";
import { OffersContext } from "../contexts/OffersContext";

const Discounts = () => {
  const offers = useContext(OffersContext);
  const [currentOffer, setCurrentOffer] = useState(0);

  const nextOffer = () => {
    setCurrentOffer((prevOffer) => (prevOffer + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrentOffer(
      (prevOffer) => (prevOffer - 1 + offers.length) % offers.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextOffer, 3000);
    return () => clearInterval(interval); // This is important to clear the interval when the component unmounts
  }, [offers]);

  return (
    <div className="w-full">
      {offers.length > 0 && (
        <div className="relative flex flex-col justify-center items-center ">
          <h2 className="font-medium ">{offers[currentOffer].title}</h2>
          <p className="text-lg">
            <Link to="/SignUp" className="underline ">
              Sign up
            </Link>
            {" "} {offers[currentOffer].description}
            </p>
            {/* <button onClick={prevOffer} className="absolute left-4">
              <CaretLeft size={52} weight="bold" />
            </button>
            <button onClick={nextOffer} className="absolute right-4">
              <CaretRight size={52} weight="bold" />
            </button> */}
        </div>
      )}
    </div>
  );
};

export default Discounts;
