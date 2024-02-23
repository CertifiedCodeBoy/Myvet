import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CaretLeft, CaretRight } from "phosphor-react";
import "./all.css";

const Slideshow = () => {
  const { products } = useContext(ProductsContext);
  const [currentImage, setCurrentImage] = useState(1);
  const [prevImageIndex, setPrevImageIndex] = useState(1);

  useEffect(() => {
    setPrevImageIndex(currentImage);
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % products.length) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [products, currentImage]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage % products.length) + 1);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => ((prevImage - 2 + products.length) % products.length) + 1
    );
  };

  return (
    <div className="relative w-full h-96 shrink">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex">
          {products
            .map((product) => (
              <img
                key={product.id}
                src={product.image}
                alt={`Image ${product.id}`}
                className={`max-w-96 max-h-96 transitions ${
                  product.id === currentImage ? "" : "hidden"
                }`}
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity:
                    product.id === currentImage || product.id === prevImageIndex
                      ? 1
                      : 0,
                }}
              />
            ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div>
          <button
            onClick={prevImage}
            className="absolute left-0 rounded-full w-16 h-16 flex justify-center items-center mx-2"
          >
            <CaretLeft size={48} weight="bold" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 rounded-full w-16 h-16 flex justify-center items-center mx-2"
          >
            <CaretRight size={48} weight="bold" />
          </button>
        </div>
        <div className="flex space-x-2 absolute bottom-4 align-baseline hover:bg-gray-400 p-2 rounded-full">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setCurrentImage(product.id)}
              className={`rounded-full  h-2 w-2 ${
                product.id === currentImage ? "bg-primary" : "bg-gray-200"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
