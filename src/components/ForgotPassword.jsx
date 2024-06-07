import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { At } from "phosphor-react";
import { 
    useToast,

} from "@chakra-ui/react";
import axios from "axios";
import "./all.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/forgot-password";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(API_URL, { email });
      if (response.status === 200) {
        toast({
          title: "Email sent",
          description: "Check your email for password reset instructions",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reset email. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-main h-screen flex pb-12 sm:pt-4 pt-16 bg-secondary">
      <div className="w-full sm:w-10/12 mx-0 sm:mx-auto flex justify-center items-center">
        <div className="w-96 sm:w-[561px] px-0 sm:p-5 mx-4 border border-black shadow-2xl rounded-3xl bg-transparent backdrop-blur-[20px] box-shadow-custom-light h-[60%] overflow-hidden">
          <form
            className="flex justify-center align-middle"
            onSubmit={handleSubmit}
          >
            <div className="w-[90%] sm:w-[auto]">
              <h1 className="text-3xl sm:text-4xl md:text-4xl mb-10 pt-8 font-bold drop-shadow-xl text-center text-black">
                Forgot Password
              </h1>
              <div className="relative mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <button
                type="submit"
                className="w-full my-3 text-white py-3 px-4 rounded-xl bg-primary"
                style={{ boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.6)" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <div className="my-6 text-center">
                Remembered your password?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
