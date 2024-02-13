import { Input } from "postcss";
import React from "react";

export const Login = () => {
  return (
    <div className="h-screen flex   ">
      <div
        className="relative  max-w-screen-xl w-10/12 h-5/6 mx-auto my-20 rounded-3xl bg-gradient-to-bl overflow-hidden"
        style={{
          background: "linear-gradient(-120deg, #4120A9, #FFFFFF 80%)",
          boxShadow: "0px 2px 10outline-nonepx 2px rgba(0, 0, 0, 0.7)",
        }}
      >
        {/* {Text} */}
        <div className=" mx-10 absolute top-20 " style={{ color: "#4120A9" }}>
          <h1
            className="font-semibold text-6xl my-8 "
            style={{ textShadow: "1px 5px 5px rgba(0, 0, 0, 0.4)" }}
          >
            Welcome Back !{" "}
          </h1>
          <h2 className="m-4 text-3xl font-bold">
            {" "}
            Continue your shopping advanture !
          </h2>
        </div>

        <form style={{ fontFamily: "poppins" }}>
          <div className="w-80 p-5 h-full absolute top-24 right-24 m-2">
            <h1 className="text-6xl text-center m-10 font-bold">Login</h1>
            <input
              onFocus={(e) => {
                e.target.style.boxShadow = "2px 2px 8px 0px rgba(0, 0, 0, 0.6)";
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

            <input
              onFocus={(e) => {
                e.target.style.boxShadow = "2px 2px 8px 0px rgba(0, 0, 0, 0.6)";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "none";
              }}
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none"
              placeholder="Password"
              required
            />
            <div className="flex items-center mr-4 ml-5">
              <input
                type="checkbox"
                id="isBuyer"
                name="isBuyer"
                className="mr-2"
                onChange={(e) => {
                    const password = document.getElementById("password");
                    if (e.target.checked) {
                        password.type = "text";
                    } else {
                        password.type = "password";
                    }
                }}
              />
              <label htmlFor="isBuyer" className="text-black">
                Show Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full my-3 text-white py-3 px-4 rounded-xl"
              style={{
                boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.6)",
                backgroundColor: "#4120A9",
              }}
            >
              Log in
            </button>
            <h2 className="text-center my-5">OR</h2>
            <div className="flex h-12 w-36 mx-auto">
                <div className="w-1/2 flex align-middle justify-center">
                    <a href="#">
                        <img src="src/Assets/facebook.png" alt="Facebook login" className="w-16"/>
                    </a>
                </div>
                <div className="w-1/2 flex align-middle justify-center">
                    <a href="#">
                        <img src="src/Assets/google.png" alt="Gmail login" className="w-16"/>
                    </a>
                </div>
            </div>
            <div className="my-6 text-center">
              Don't have an account ?{" "}
              <button style={{ color: "#4120A9" }}>Sign Up</button>
            </div>
          </div>
        </form>
        <div className=" overflow-hidden ">
          <img
            src="src/Assets/man.png"
            alt="man image"
            className="absolute -bottom-0 left-10 h-[85%] object-contain"
          ></img>
        </div>
      </div>
    </div>
  );
};
