import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash } from "phosphor-react";

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
    <div className="font-main my-0 h-screen overflow-hidden flex-nowrap">
      <div className="relative w-10/12 mx-auto">
        <div className="h-full flex items-center pb-16 md:pb-5">
          <div className="h-[1000px]"></div>
          <div className="flex justify-center mx-auto w-full">
            <div className="w-96 sm:w-[800px] p-5 shrink-1 h-1/3 border-solid shadow-2xl border border-secondary rounded-3xl bg-transparent backdrop-blur-[20px] box-shadow-custom-light">
              <form className="flex justify-center align-middle" onSubmit={handleSubmit}>
                <div className="sm:w-[300px]">
                  <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-10 font-bold drop-shadow-xl text-center text-black">
                    Sign Up
                  </h1>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none"
                    placeholder="Last Name"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none"
                    placeholder="Email"
                    required
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none pr-10"
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-4 bottom-1/2 top-1/3 flex items-center justify-center"
                    >
                      {showPassword? <EyeSlash size={30}/> : <Eye size={30} />}
                    </button>
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none"
                    placeholder="Confirm Password"
                    required
                  />
                  {/* Styled alert for password match error */}
                  {passwordMatchError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                      <strong className="font-bold">Error:</strong> Password and confirmation password do not match.
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full my-3 text-white py-3 px-4 rounded-xl bg-primary"
                    style={{ boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.6)" }}
                  >
                    Sign Up
                  </button>
                  {/* Other UI elements */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
