import { Box } from "@chakra-ui/react";
import React from "react";

const UpgradeToSeller = () => {
  return (
    <Box className=" p-4 flex flex-col place-items-center">
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          className="p-2 border border-gray-200 rounded-md"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="p-2 border border-gray-200 rounded-md"
        />
        <input
          type="file"
          placeholder="Upload ID Card"
          className="p-2 border border-gray-200 rounded-md"
        />
        <button className="bg-primary text-white p-2 rounded-md">Submit</button>
      </form>
    </Box>
  );
};

export default UpgradeToSeller;
