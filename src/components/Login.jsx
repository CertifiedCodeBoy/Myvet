import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash, At } from "phosphor-react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="font-main h-auto min-h-[100vh] overflow-auto flex items-center bg-secondary">
      <div className="w-full sm:w-10/12 flex justify-center mx-0 sm:mx-auto ">
        <div className="flex justify-center w-full">
          <div className="w-96 sm:w-[600px] pt-[auto] px-0 sm:p-5 mt-10 mb-5 mx-2 border-solid shadow-2xl border-2 border-primary rounded-3xl bg-transparent backdrop-blur-[20px] box-shadow-custom-light h-[auto] overflow-hidden">
            <form
              className="flex justify-center align-middle"
              onSubmit={handleSubmit}
            >
              <div className="w-[90%] sm:w-[auto]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl mb-10 pt-8 font-bold drop-shadow-xl text-center text-black">
                  Login
                </h1>
                <div className="relative mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-200 rounded-2xl py-3 pr-10 pl-4 outline-none"
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
                    className="w-full bg-gray-200 rounded-2xl py-3 px-3 outline-none pr-10"
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
                  <Link to="/signUp" className="text-primary">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
