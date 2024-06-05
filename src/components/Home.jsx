import React, { useContext } from "react";
import Slideshow from "./SlideShow";
import { CloseButton } from "@chakra-ui/react";
import "./all.css";
import Section from "./Section";
import Featured from "./Featured";
import UseMobile from "./UseMobile";
import { UserContext } from "../contexts/UserContext";
import { ProductsContext } from "../contexts/ProductsContext";
import Loading from "./Loading";

const Home = () => {
  const { showToast, setShowToast, isLoggedIn } = useContext(UserContext);
  const { products, unloggedProducts, loading } = useContext(ProductsContext);

  
  isLoggedIn ? !products || loading && <Loading/> : !unloggedProducts || loading && <Loading/>;

  return (
    <div className="font-main bg-gray-100 h-full pb-4 flex justify-center">
      <div className="absolute z-50 top-[620px]">
        {showToast && (
          <div
            className="
          bg-green-900 text-white p-4 rounded-lg shadow-lg flex justify-between items-center w-96 mx-auto transition-all duration-500 ease-in-out
          "
          >
            <p className="text-lg font-bold text-center">Welcome Back!</p>
            <CloseButton onClick={() => setShowToast(false)} />
          </div>
        )}
      </div>
      <div className="w-full">
        {/* {window.innerWidth > 640 ? <Slideshow /> : <UseMobile />}
        <Section title="Most Sold" category={products.mostSold} />
        <Featured title="Featured" />
        <Section title="Shoes" category={products.Shoe} />
        <Section title="Hidjebs" category={products.Hidjeb} />
        <Section title="Pants" category={products.Pants} />
        <Section title="Hoodies" category={products.Hoodie} />
        <Section title="T-Shirts" category={products.TShirt} />
        <Section title="Dresses" category={products.Dress} />
        <Section title="Promoted" category={products.Promoted} /> */}
        <Section title="Jewelery" category={unloggedProducts.jewelery} />
        {console.log(unloggedProducts.map((product) => product.filter((category) => category === "jewelery")))} 
      </div>
    </div>
  );
};

export default Home;
