import { useState,useContext } from "react";
import { AlertDialog, Box, Heading, useToast } from "@chakra-ui/react";
import axios from "axios"; // Import axios for making API calls
import Cookies from "js-cookie"; // Import Cookies for handling cookies
import { UserContext } from "../contexts/UserContext"; // Import UserContext for accessing user data
import { Check, Info, X } from "phosphor-react";

const UpgradeToSeller = () => {
  const { user } = useContext(UserContext); // Get user data from UserContext
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idCard, setIdCard] = useState(null); // For file upload
  const [status, setStatus] = useState(""); // For displaying status message to the user
  const [icon, setIcon] = useState(); // For displaying icon in the status message
  const Toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make API call to upgrade to seller
      const response = await fetch(
        "http://localhost:5000/account/upgraderequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            jwt: Cookies.get("jwt"),
          },
        }
      );
      // Handle success response
      if (response.ok) {
        console.log("Upgrade to seller response:", response.message);

        // Clear form fields after successful submission
        setEmail("");
        setPhoneNumber("");
        setIdCard(null);

        // Show success message to the user (you can use toast or any other method)
        alert("Upgrade to seller successful!");
      }

      // Handle error response
      switch (response.status) {
        case 401:
          setStatus("You must be logged in");
          setIcon(<X size={80} color="red" />);
          return (
            <div>
              <h1>You must be logged in</h1>
            </div>
          );
        case 409:
          setStatus("You've already requested an upgrade.");
          Toast({
            title: "You've already requested an upgrade.",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
          setIcon(<Info size={80} color="blue" />);
          return;
        case 200:
          setStatus("Request sent! We'll keep you updated in your email.");
          Toast({
            title: "Request sent! We'll keep you updated in your email.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setIcon(<Check size={80} color="green" />);
          return;
        default:
          "User not found." || "Error occurred.";
          break;
      }
    } catch (error) {
      // Handle error
      console.error("Upgrade to seller error:", error);
    }
  };

  return (
    <Box className="p-4 flex flex-col place-items-center">
      { status ? 
      <div
        className="flex flex-col gap-4 items-center"
      >
        {icon}
        <Heading>{status}</Heading>
      </div> : 
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-200 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-2 border border-gray-200 rounded-md"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            // required
          />
          <input
            type="file"
            placeholder="Upload ID Card"
            className="p-2 border border-gray-200 rounded-md"
            onChange={(e) => setIdCard(e.target.files[0])}
            // required
          />
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-md"
          >
            Submit
          </button>
        </form>
      }
    </Box>
  );
};

export default UpgradeToSeller;
