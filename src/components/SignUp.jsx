import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash, User, At } from "phosphor-react";
import "./all.css";
import Navbar from "./Navbar";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false); // State for password match error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true); // Set password match error to true
      return; // Prevent submission if passwords don't match
    }
    // Reset password match error when passwords match
    setPasswordMatchError(false);
    // Add your signup logic here
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="font-main sm:h-[calc(100vh-75px)] h-[calc(100vh-40px)] shrink-1 overflow-auto flex items-center bg-slate-500">
      <div className="w-full sm:w-10/12 flex justify-center mx-0 sm:mx-auto ">
          <div className="w-96 sm:w-[800px] pt-[auto] px-2 mx-2 sm:p-5 mt-10 mb-5 sm:mt-36 sm:mb-10 shrink-1 border-solid shadow-2xl border border-secondary rounded-3xl bg-transparent backdrop-blur-[20px] box-shadow-custom-light h-[auto] overflow-auto">
            <form
              className="flex justify-center align-middle"
              onSubmit={handleSubmit}
            >
              <div className="sm:w-[450px]">
                <h1 className="text-4xl sm:text-4xl md:text-5xl mb-12 pt-8 font-bold drop-shadow-xl text-center text-black">
                  Sign Up
                </h1>
                <div className="flex flex-row gap-4 relative justify-center items-center">
                  <div className="relative mb-4">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-gray-200 rounded-2xl py-3 pr-12 pl-2 outline-none"
                      placeholder="First Name"
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
                      <User size={25} />
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-gray-200 rounded-2xl py-3 pr-12 px-3 outline-none"
                      placeholder="Last Name"
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
                      <User size={25} />
                    </div>
                  </div>
                </div>
                <div className="relative mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-200 rounded-2xl py-3 pr-12 px-3 outline-none"
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
                    className="w-full bg-gray-200 rounded-2xl py-3 pr-12 px-3 outline-none pr-10"
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
                <div className="relative mb-4">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-gray-200 rounded-2xl py-3 px-3 outline-none"
                    placeholder="Confirm Password"
                    onFocus={(e) => {
                      e.target.style.boxShadow =
                        "2px 2px 8px 0px rgba(0, 0, 0, 0.6)";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "none";
                    }}
                    required
                  />
                </div>
                {/* Styled alert for password match error */}
                {passwordMatchError && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Error:</strong> Password and
                    confirmation password do not match.
                  </div>
                )}
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
                  Sign Up
                </button>
                <div className="relative my-5 flex items-center justify-center">
                  <div className="flex-grow border-t border-black"></div>
                  <div className="px-2 text-center font-bold">OR</div>
                  <div className="flex-grow border-t border-black"></div>
                </div>
                <div className="px-2 mb-4 text-center font-bold">
                  Sign up with :{" "}
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
                  Already have an account ?{" "}
                  <Link to="/Login" className="text-primary">
                    Login
                  </Link>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
