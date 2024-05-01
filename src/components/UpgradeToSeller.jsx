import { useState } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios"; // Import axios for making API calls

const UpgradeToSeller = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idCard, setIdCard] = useState(null); // For file upload

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to send file and other data
    const formData = new FormData();
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("idCard", idCard);

    try {
      // Make API call to upgrade to seller
      const response = await axios.post("YOUR_API_ENDPOINT_HERE", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${YOUR_ACCESS_TOKEN_HERE}`,
        },
      });

      // Handle success response
      console.log("Upgrade to seller response:", response.data);

      // Clear form fields after successful submission
      setEmail("");
      setPhoneNumber("");
      setIdCard(null);

      // Show success message to the user (you can use toast or any other method)
      alert("Upgrade to seller successful!");
    } catch (error) {
      // Handle error
      console.error("Upgrade to seller error:", error.response.data);

      // Show error message to the user
      alert("Error upgrading to seller. Please try again.");
    }
  };

  return (
    <Box className="p-4 flex flex-col place-items-center">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-200 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="p-2 border border-gray-200 rounded-md"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="file"
          placeholder="Upload ID Card"
          className="p-2 border border-gray-200 rounded-md"
          onChange={(e) => setIdCard(e.target.files[0])}
          required
        />
        <button type="submit" className="bg-primary text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </Box>
  );
};

export default UpgradeToSeller;
