import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

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
              <Home />
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;