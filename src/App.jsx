import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div className="">
      <Router>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/Categories" element={<Categories/>}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<SignUp />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
