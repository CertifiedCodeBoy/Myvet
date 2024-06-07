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
import { useToast } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import blackLogo from "../Assets/blacklogo.png";
import ShoppingBags from "../Assets/ShoppingBags.png";
import { Link } from "react-router-dom";
import StartSelling from "./StartSelling";
import SellerSection from "./SellerSection.jsx";

const Home = () => {
  const { user } = useContext(UserContext);
  const toast = useToast();
  const { showToast, setShowToast } = useContext(UserContext);
  const { products } = useContext(ProductsContext);
  const [showModal, setShowModal] = React.useState(showToast);

  // setTimeout(() => {
  //   setShowModal(false);
  // }, 10000);

  if (!products) {
    return <Loading />;
  }

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

        {user && !user.isSeller && (
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <ModalOverlay />
            <ModalContent
              className="
            overflow-hidden
            "
            >
              <ModalHeader
                className="
              bg-gray-100
                flex justify-start items-center
              "
              >
                <div
                  className="
                flex justify-start gap-4 items-center 
                "
                >
                  <img src={blackLogo} alt="logo" className="w-12 mx-auto" />
                  <p className="text-lg font-bold text-center">
                    Did You know?!
                  </p>
                </div>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p className="text-2xl text-center p-4">
                  You can start your e-commerce journey and start selling with
                  us!
                </p>
                <p className="text-lg font-bold p-4 text-center">
                  <Link to={`/Profile/${user.id}`} className="text-blue-500">
                    Click here to learn more!
                  </Link>
                </p>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </div>
      <div className="w-full">
        {user && !user.isSeller && <StartSelling user={user.id} />}
        {window.innerWidth > 640 ? <Slideshow /> : <UseMobile />}
        <Section title="Most Sold" category={products.mostSold} />
        <Featured title="Featured" />
        <Section title="Shoes" category={products.Shoe} />
        {user && !user.isSeller && (
          <SellerSection
            title="
          You can start selling today!
        "
            user={user}
          />
        )}
        <Section title="Pants" category={products.Pants} />
        <Section title="Hoodies" category={products.Hoodie} />
        <Section title="T-Shirts" category={products.TShirt} />
        <Section title="Dresses" category={products.Dress} />
        <Section title="Promoted" category={products.Promoted} />
        <Section title="Jewelery" category={products.Jewelry} />
      </div>
    </div>
  );
};

export default Home;
