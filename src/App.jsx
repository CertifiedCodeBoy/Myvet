import React from "react";
import Navbar from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { Home } from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div>
        <Login />
        <SignUp />
      </div>
    </div>
  );
};

export default App;
