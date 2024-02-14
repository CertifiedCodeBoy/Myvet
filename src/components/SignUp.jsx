import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen flex font-main p-5">
      <div
        className="relative max-w-screen-xl w-10/12 h-full mx-auto rounded-3xl bg-gradient-to-bl overflow-hidden"
        style={{
          background: "linear-gradient(-120deg, #4120A9, #FFFFFF 80%)",
          boxShadow: "0px 2px 10outline-nonepx 2px rgba(0, 0, 0, 0.7)",
        }}
      >
        {/* {Text} */}
        <div className=" mx-10 absolute top-20 text-primary" id="textguyContainer">
          <h1
            className="font-semibold text-6xl my-8 "
            style={{ textShadow: "1px 5px 5px rgba(0, 0, 0, 0.4)" }}
          >
            Create new account{" "}
          </h1>
          <h2 className="m-4 text-3xl font-bold">
            {" "}
            Start your journey in buying and selling with ease!
          </h2>
        </div>

        <form className="">
          <div className=" p-5 w-80 absolute right-24 m-2">
            <h1 className="text-5xl text-center m-10 font-bold">Sign Up</h1>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none "
              style={{ boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.6)" }}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none "
              style={{ boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.6)" }}
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none "
              style={{ boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.6)" }}
              placeholder="Email"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none "
              style={{ boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.6)" }}
              placeholder="Password"
              required
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-gray-200 rounded-2xl py-3 px-3 mb-4 outline-none"
              style={{ boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.6)" }}
              placeholder="Confirm Password"
              required
            />

            {/* Account type */}
            <div className=" mb-4 ">
              <span className="text-black">Account type:</span>
            </div>

            {/* Checkboxes for buyer and seller */}
            <div className="flex justify-center mb-4">
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="isBuyer"
                  name="userType"
                  value="buyer"
                  className="mr-2"
                />
                <label htmlFor="isBuyer" className="text-black">
                  Buyer
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="isSeller"
                  name="userType"
                  value="buyer"
                  className="mr-2"
                />
                <label htmlFor="isSeller" className="text-black">
                  Seller
                </label>
              </div>
              
            </div>

            {/* Checkbox for accepting privacy policy */}
            <div className="mb-4 text-center">
              <input
                type="checkbox"
                id="acceptPolicy"
                name="acceptPolicy"
                className="mr-2 outline-none w-4 h-4"
              />
              <label htmlFor="acceptPolicy" className="to-black">
                I agree with the {" "}
                <span className="cursor-pointer " style={{ color: "#4120A9" }}>
                  privacy
                </span>
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
              Sign Up
            </button>
            <div className="my-6 text-center">
              Already have an account ?{" "}
              <Link to="/Login" className="text-[#4120A9]">Log in</Link>
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

export default SignUp;