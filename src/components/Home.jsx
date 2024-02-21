import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-main bg-gray-700  ">
      <div className="flex flex-col w-full gap-8">
        <section className="h-36 mt-8 bg-primary p-2 text-3xl flex flex-col justify-center items-center gap-2">
          <h2 className="font-medium">20% OFF on ALL products</h2>
          <p className="text-2xl">
            <Link to="/SignUp" className=" underline">
              Sign up
            </Link>{" "}
            Right Now !
          </p>
        </section>
        <div className="max-h-[1000px] h-[824px] bg-blue-300 flex items-center border justify-center w-full">
          <section></section>
        </div>
        <Section
          title="Men's"
          filter={(p) => p.category === "men's clothing"}
        />
        <Section
          title="Women's"
          filter={(p) => p.category === "women's clothing"}
        />
        <Section title="Popular" filter={(p) => p.rating.rate >= 3} />
      </div>
    </div>
  );
};
const Section = ({ title, filter }) => {
  const useProducts = () => useContext(ProductsContext);
  const { products, loading } = useProducts();

  if (loading || !products) {
    return <p>Loading...</p>;
  }

  const filteredProducts = products.filter(filter);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl sm:text-6xl font-bold text-black text-left p-4">
        {title}
      </h1>
      <div className="flex flex-row h-[450px] overflow-y-hidden justify-start overflow-x-auto">
        {filteredProducts.map((product) => (
          <Kard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const Kard = ({ product }) => {
  return (
    <Card className="w-full min-h-60 max-w-[auto] min-w-60 mx-4 overflow-hidden mb-4 flex justify-center items-center">
      <CardHeader shadow={false} floated={false} className="mt-2 mb-8">
        <img
          src={product.image}
          alt="card-image"
          className="h-60 w-80 object-top"
        />
      </CardHeader>
      <CardFooter className="">
        <div className="m-auto relative bottom-0 flex items-center justify-between p-2 h-10 ">
          <Typography
            color="blue-gray"
            className="font-medium text-[12px] w-2/3 "
          >
            {product.title.length < 50
              ? product.title
              : product.title.substring(0, 50) + "..."}
          </Typography>
          <Typography color="blue-gray" className="font-medium ">
            ${product.price}
            {/* <br />
            {product.rating.rate} stars */}
          </Typography>
        </div>
        {/* <Typography
          variant="small"
          color="gray"
          className="font-normal p-2 opacity-75 max-h-20 w-full overflow-x-hidden m-auto"
        >
          {product.description.substring(0, 50) + "..."}
        </Typography> */}
      </CardFooter>
      {/* <CardFooter>
        <div className="flex flex-row">
          <Button
            ripple={false}
            fullWidth={true}
            onBlur={(e) => {
              e.target.style.boxShadow = "2px 2px 8px 0px rgba(0, 0, 0, 0.6)";
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = "none";
            }}
            onTouchMoveCapture={(e) => {
              e.target.style.boxShadow = "none";
            }}
          >
            View more
          </Button>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-gray-200 text-blue-gray-900"
          >
            Add to Cart
          </Button>
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default Home;
