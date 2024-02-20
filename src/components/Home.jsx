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

const Home = () => {
  return (
    <div className="font-main bg-gray-200 ">
      <div className="flex flex-col w-full gap-8 ">
        <section className="h-40 border"></section>
        <section className="h-80 flex items-center justify-center"></section>
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
      <h1 className="text-6xl font-bold text-black text-center p-8">{title}</h1>
      <div className="flex flex-row h-[450px] overflow-y-hidden justify-between overflow-x-auto">
        {filteredProducts.map((product) => (
          <Kard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const Kard = ({ product }) => {
  return (
    <Card className="w-full min-h-60 max-w-60 min-w-60 mx-2 overflow-hidden">
      <CardHeader shadow={false} floated={false} className="mt-2 mb-4">
        <img
          src={product.image}
          alt="card-image"
          className="h-60 w-80 object-contain"
        />
      </CardHeader>
      <CardBody>
        <div className="m-auto flex items-center justify-between p-2 h-20 ">
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
            <br />
            {product.rating.rate} stars
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal p-2 opacity-75 max-h-20 w-full overflow-x-hidden m-auto"
        >
          {product.description.substring(0, 50) + "..."}
        </Typography>
      </CardBody>
      <CardFooter>
        <div className="flex flex-row">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-gray-200 text-blue-gray-900"
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
      </CardFooter>
    </Card>
  );
};

export default Home;
