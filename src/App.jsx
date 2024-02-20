import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact>       
        </Route>
        <Route path="/Login" element={<Login />}>         
        </Route>
        <Route path="/Signup" element={<SignUp />}>       
        </Route>
      </Routes>
    </Router>
    </div>
  );
};

export default App;
