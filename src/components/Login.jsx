import React from "react";
import { Link } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const scrollToSlow = (to, duration) => {
    const element = document.documentElement;
    const start = element.scrollTop;
    const change = to - start;
    let currentTime = 0;
    const increment = 1; // Adjust the increment for smoother scrolling

    const animateScroll = () => {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
    element.style.overflow = "hidden";
  };

  // Easing functions
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  React.useEffect(() => {
    scrollToSlow(2000, 50);
  }, []);
  return (
    <div className=" font-main overflow-auto">
      <div className="relative w-10/12 mx-auto">
        <div className=" h-screen flex items-end pb-16 md:pb-5 md:h-full">
          <div className="h-[1000px]"></div>
          <div className="flex justify-center mx-auto w-full ">
            <div className=" w-96 sm:w-[800px] p-5 shrink-1 h-1/3 border-solid shadow-2xl border border-secondary rounded-3xl bg-transparent backdrop-blur-[20px] box-shadow-custom-light">
              <form className="flex justify-center align-middle">
                <div className="  sm:w-[300px]">
                  <h1 className=" text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-10 font-bold drop-shadow-xl text-center text-black">
                    Welcome Back !
                  </h1>
                  <h2 className="hidden text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold drop-shadow-lg  text-center">
                    Continue your shopping adventure
                  </h2>
                  <h1 className=" hidden text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl text-center mb-10 font-bold text-secondary drop-shadow-lg">
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
                    Log in
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
