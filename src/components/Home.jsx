import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import {
  Card,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Slideshow from "./SlideShow";

const Home = () => {
  return (
    <div className="font-main bg-secondary h-full">
      <div className="flex flex-col w-full gap-8">
        <section className="h-36 mt-8 bg-primary p-2 text-md sm:text-xl md:text-2xl flex flex-col justify-center items-center gap-2 shrink">
          <h2 className="font-medium">20% OFF on ALL products</h2>
          <p>
            <Link to="/SignUp" className=" underline">
              Sign up
            </Link>{" "}
            Right Now !
          </p>
        </section>
        <div className="max-h-[500px] h-auto py-8 bg-white flex items-center justify-center w-full overflow-hidden shrink">
          <Slideshow />
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

  const filteredProducts = products.filter(
    (product) => product.category !== "electronics" && filter(product)
  );
  return (
    <div className="flex flex-col mb-8">
      <h1 className="text-4xl sm:text-6xl font-bold text-black text-left p-4 ml-8">
        {title}
      </h1>
      <div className="flex flex-row gap-8 p-4 overflow-y-hidden justify-start overflow-x-auto">
        {filteredProducts.map((product) => (
          <Kard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const Kard = ({ product }) => {
  return (
    <div className="flex flex-col">
    <Card className="w-full min-w-60 rounded-none overflow-hidden flex justify-center items-center hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
      <CardHeader shadow={false} floated={false} className="py-8">
        <img
          src={product.image}
          alt="card-image"
          className="h-60 max-w-60 object-contain transition-all duration-300 ease-in-out"
        />
      </CardHeader>
      <CardFooter className="">
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
    <div className="m-auto relative bottom-0 flex items-start px-2 justify-between w-full h-10 ">
    <Typography
      color="blue-gray"
      className="font-medium text-[12px] max-w-36"
      >
      {product.title.length < 40
        ? product.title  +"       "
        : product.title.substring(0, 40) + "..." +"       "}
    </Typography>
    <Typography color="blue-gray" className="font-medium ">
      ${product.price}
      {/* <br />
      {product.rating.rate} stars */}
    </Typography>
  </div>
      </Card>
  </div>
  );
};

export default Home;
