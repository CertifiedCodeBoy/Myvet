// Import the required library
import { Link } from "react-router-dom";
import { Bag } from "phosphor-react";

const SellerSection = ({ title, user, setP4, setP1, setSelected }) => {
  return (
    <div>
      <div
        className="
                bg-red-100
                flex flex-col justify-center items-center
                h-80
                px-8
                gap-8
                "
      >
        <Bag size={60} color="#000" />
        <h1 className="text-4xl font-bold">{title}</h1>
        {setP4 && setP1 ? (
          <p
            className="
                text-xl
                text-center
                "
          >
            Check your{" "}
            {
              <button
                onClick={() => {
                  setSelected(4);
                  setP1(false);
                  setP4(true);
                }}
              >
                <span className="text-blue-500 font-extrabold">Seller Section</span>
              </button>
            }{" "}
            to start selling your products.
          </p>
        ) : (
          <p>
            Check your{" "}
            {
              <Link to={`/Profile/${user}`}>
                <span className="text-blue-500">Profile</span>
              </Link>
            }{" "}
            to start selling your products.
          </p>
        )}
      </div>
    </div>
  );
};

export default SellerSection;
