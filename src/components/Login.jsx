import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeSlash, At } from "phosphor-react";
import { UserContext } from "../contexts/UserContext";
import { CloseButton, useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";

import "./all.css";
const Login = () => {
  const toast = useToast();
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { setIsLoggedIn, setUser, setShowToast } = useContext(UserContext);

  const navigate = useNavigate();
  const API_URL = "https://api.escuelajs.co/api/v1/auth/login";

  const loginUser = async (formData) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Failed to login: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.access_token) {
      throw new Error("No access token received");
    }

    return data.access_token;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(formData)
      .then((token) => {
        Cookies.set("token", token);
        setIsLoggedIn(true);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
        setUser({ ...formData, token });
        navigate("/");
        setFormData({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        setWrongCredentials(true);
        toast({
          title: "Wrong credentials",
          description: "Please check your email and password",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <div className="font-main h-auto flex pb-12 sm:pt-4 pt-16 bg-secondary">
      <div className="w-full sm:w-10/12 mx-0 sm:mx-auto flex justify-center  ">
        <div className="w-96 sm:w-[561px] px-0 sm:p-5 mx-4 border border-black shadow-2xl rounded-3xl bg-transparent backdrop-blur-[20px] box-shadow-custom-light h-[auto] overflow-hidden">
          <form
            className="flex justify-center align-middle"
            onSubmit={handleSubmit}
          >
            <div className="w-[90%] sm:w-[auto]">
              <h1 className="text-3xl sm:text-4xl md:text-4xl mb-10 pt-8 font-bold drop-shadow-xl text-center text-black">
                Login
              </h1>
              <div className="relative mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-200 rounded-2xl py-3 pr-10 pl-4 outline-none ${
                    wrongCredentials ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="Email"
                  onFocus={(e) => {
                    e.target.style.boxShadow =
                      "2px 2px 8px 0px rgba(0, 0, 0, 0.6)";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "none";
                  }}
                  required
                />
                <div className="absolute inset-y-0 right-4 flex items-center justify-center">
                  <At size={25} />
                </div>
              </div>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full bg-gray-200 rounded-2xl py-3 px-3 outline-none pr-10 ${
                    wrongCredentials ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="Password"
                  onFocus={(e) => {
                    e.target.style.boxShadow =
                      "2px 2px 8px 0px rgba(0, 0, 0, 0.6)";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "none";
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center justify-center"
                >
                  {showPassword ? <EyeSlash size={25} /> : <Eye size={25} />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full my-3 text-white py-3 px-4 rounded-xl bg-primary"
                style={{ boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.6)" }}
                onBlur={(e) => {
                  e.target.style.boxShadow =
                    "2px 2px 8px 0px rgba(0, 0, 0, 0.6)";
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "none";
                }}
              >
                Login
              </button>
              <div className="relative my-5 flex items-center justify-center">
                <div className="flex-grow border-t border-black"></div>
                <div className="px-2 text-center font-bold">OR</div>
                <div className="flex-grow border-t border-black"></div>
              </div>
              <div className="px-2 mb-4 text-center font-bold">
                Login with :{" "}
              </div>

              <div className="flex h-12 w-24 mx-auto">
                <div className="w-1/2 flex align-middle justify-center">
                  <a href="#">
                    <img
                      src="src/Assets/facebook.png"
                      alt="Facebook login"
                      className="w-10"
                    />
                  </a>
                </div>
                <div className="w-1/2 flex align-middle justify-center">
                  <a href="#">
                    <img
                      src="src/Assets/google.png"
                      alt="Gmail login"
                      className="w-10"
                    />
                  </a>
                </div>
              </div>
              <div className="my-6 text-center">
                Don't have an account ?{" "}
                <Link to="/signUp" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
