import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import { OffersProvider } from "./contexts/OffersContext";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";


const App = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
          <Route path="/" element={
            <>
              <OffersProvider>
              <Home />
              </OffersProvider>
              <Footer />
            </>
          } exact></Route>
          <Route path="/Categories" element={
            <>
              <Categories/>
            </>
          }></Route>
          <Route path="/Cart" element={
            <>
            <Cart />
              <Footer />
            </>}></Route>
            <Route path="/ProductPage" element={
            <>
            <ProductPage />
            <Footer/>
            </>
          }></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;