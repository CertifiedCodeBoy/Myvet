import React from "react";

export const Login = () => {
  return (
    <div>
      <div
        className="grid grid-cols-2 relative min-h-[700px] max-w-screen-xl w-10/12 h-5/6 mx-auto my-20 rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(-135deg, #4120A9, #FFFFFF 70%)",
        }}
      >
        <div className="grid-rows-2">
          <div className="w-full h-1/3 z-50 p-10 absolute mt-10">
            <h1 className="text-6xl font-bold">Welcome back!</h1>
            <h2 className="m-4 text-3xl font-bold">
              Continue your shopping adventure!
            </h2>
          </div>
          <div className=" overflow-hidden ">
            <img
              src="src/Assets/man.png"
              alt="man image"
              className="absolute -bottom-0 left-10 h-[85%] object-contain"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
