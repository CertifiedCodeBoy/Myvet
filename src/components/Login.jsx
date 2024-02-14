import React from "react";
import { Link } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className=" font-main">
      <div className="relative border w-10/12  mx-auto">
        <div>
          <div className=" mx-auto my-20 pb-96 sticky border top-20 text-secondary ">
            <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-xl text-center">
              Welcome Back !
            </h1>
            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold drop-shadow-lg  text-center">
              Continue your shopping adventure
            </h2>
          </div>
          <div className="h-96"></div>
          <div className="flex justify-center mt-80 sticky top-80 mx-auto w-full border">
            <div className=" w-96 sm:w-[900px] p-10 shrink-1 h-full border-2 border-solid border-third rounded-3xl bg-transparent backdrop-blur-[20px] box-shadow-custom-light">
              <form className="flex justify-center align-middle">
                <div className=" border sm:w-[300px]">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl text-center mb-10 font-bold text-secondary drop-shadow-lg">
                    Login
                  </h1>
                  <input
                    onFocus={(e) => {
                      e.target.style.boxShadow =
                        "2px 2px 8px 0px rgba(0, 0, 0, 0.6)";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "none";
                    }}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none"
                    placeholder="Email"
                    required
                  />
                  <div className="relative">
                    <input
                      onFocus={(e) => {
                        e.target.style.boxShadow =
                          "2px 2px 8px 0px rgba(0, 0, 0, 0.6)";
                      }}
                      onBlur={(e) => {
                        e.target.style.boxShadow = "none";
                      }}
                      type={showPassword ? "text" : "password"}
                      className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none pr-10" // Added some padding to the right
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-4 bottom-1/2 top-1/3 flex items-center justify-center" // Adjusted the positioning
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </button>
                  </div>
                  <div className="flex items-center mr-4 ml-5"></div>

                  <button
                    type="submit"
                    className="w-full my-3 text-white py-3 px-4 rounded-xl"
                    style={{
                      boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.6)",
                      backgroundColor: "#6d4c3d",
                    }}
                  >
                    Log in
                  </button>
                  <div className="relative my-5 flex items-center justify-center">
                    <div className="flex-grow border-t border-black"></div>
                    <div className="px-2 text-center font-bold">OR</div>
                    <div className="flex-grow border-t border-black"></div>
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
                    <Link to="/SignUp" className="text-primary">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
