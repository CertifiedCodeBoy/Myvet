import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash, At } from "phosphor-react";
import "./all.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
    scrollToSlow(2000, 100);
  }, []);
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
    <div className="font-main my-0 h-screen scroll-m-72 flex-nowrap overflow-hidden">
      <div className="relative w-10/12 mx-auto">
        <div className="h-full flex items-center pb-16 md:pb-5">
          <div className="h-[1000px]"></div>
          <div className="flex justify-center mx-auto w-full">
            <div
              className="w-96 sm:w-[800px] p-5 shrink-1 border-solid shadow-2xl border border-secondary rounded-3xl bg-transparent backdrop-blur-[20px] box-shadow-custom-light h-[500px] mb-44 overflow-auto"
              id="logindiv"
            >
              <form
                className="flex justify-center align-middle"
                onSubmit={handleSubmit}
              >
                <div className="sm:w-[300px]">
                  <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-10 font-bold drop-shadow-xl text-center text-black">
                    Login
                  </h1>
                  <div className="relative mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-200 rounded-2xl py-3 px-3 outline-none"
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
                      {showPassword ? (
                        <EyeSlash size={25} />
                      ) : (
                        <Eye size={25} />
                      )}
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
    </div>
  );
};

export default Login;
