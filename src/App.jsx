import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import OffersProvider from "./contexts/OffersContext";
import Cart from "./components/Cart";
import { ChakraProvider } from "@chakra-ui/react";
import Discounts from "./components/Discounts";
import ProductsProvider from "./contexts/ProductsContext";
const App = () => {
  return (
    <ChakraProvider>
        <ProductsProvider>
      <OffersProvider>
        <Router>
          <div className="">
            <Routes>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/Signup" element={<SignUp />}></Route>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Discounts/>
                    <Home />
                    <Footer />
                  </>
                }
                exact
              ></Route>
              <Route
                path="/Categories/:category"
                element={
                  <>
                    <Navbar />
                    <Discounts/>
                    <Categories />
                    <Footer />
                  </>
                }
              ></Route>
              <Route
                path="/Cart"
                element={
                  <>
                    <Navbar />
                    <Cart />
                    <Footer />
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </OffersProvider>
      </ProductsProvider>
    </ChakraProvider>
  );
};

export default App;
