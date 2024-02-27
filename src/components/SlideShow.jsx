import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CaretLeft, CaretRight } from "phosphor-react";
import "./all.css";
import { Image } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

const Slideshow = ({filter}) => {
  const { products } = useContext(ProductsContext);
  const filteredProducts = products.filter(
    (product) => product.category !== "electronics" && filter(product)
    );
    const [currentImage, setCurrentImage] = useState(filteredProducts.id);
    const [prevImageIndex, setPrevImageIndex] = useState(filteredProducts.id);
    const imageMaxHeight = useBreakpointValue({ base: 72, sm: 96 });
    const imageMinHeight = useBreakpointValue({ base: 60, sm: 80 });
  
  useEffect(() => {
    setPrevImageIndex(currentImage);
    const interval = setInterval(() => {
      setCurrentImage((prevImageId) => {
        const currentIndex = filteredProducts.findIndex(product => product.id === prevImageId);
        return filteredProducts[(currentIndex + 1) % filteredProducts.length].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredProducts, currentImage]);

  const nextImage = () => {
    setCurrentImage((prevImageId) => {
      const currentIndex = filteredProducts.findIndex(product => product.id === prevImageId);
      return filteredProducts[(currentIndex + 1) % filteredProducts.length].id;
    });
  };

  const prevImage = () => {
    setCurrentImage((prevImageId) => {
      const currentIndex = filteredProducts.findIndex(product => product.id === prevImageId);
      return filteredProducts[(currentIndex - 1 + filteredProducts.length) % filteredProducts.length].id;
    });
  };

  return (
    <div className="relative w-full h-96 shrink">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex">
          {filteredProducts
            .map((product) => (
              <Image
              key={product.id}
              src={product.image}
              alt={`Image ${product.id}`}
              className={`${
                product.id === currentImage ? "" : "hidden"
              }`}
              maxH={imageMaxHeight}
              minH={imageMinHeight}
            />
            ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="relative w-full flex items-center">
          <button
            onClick={prevImage}
            className="absolute left-4"
          >
            <CaretLeft size={52} weight="bold" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4"
          >
            <CaretRight size={52} weight="bold" />
          </button>
        </div>
        <div className="flex space-x-2 absolute bottom-0 align-middle hover:bg-gray-50 p-2 px-4 rounded-full">
          {filteredProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => setCurrentImage(product.id)}
              className={`rounded-full h-2 w-2 ${
                product.id === currentImage ? "bg-primary " : "bg-gray-200"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
