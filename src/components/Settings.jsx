import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";

const Settings = ({ setP5 }) => {
  const { id } = useParams();
  const toast = useToast();
  const { user, updataUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        status: "error",
      });
      return;
    }

    const data = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    const updateUser = async () => {
      const url = "http://localhost:5000/Settings";
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          jwt: Cookies.get("jwt"),
        },
        body: JSON.stringify(data),
      };

      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const dota = await response.json();
          console.log("Success:", dota.message);
          console.log("Data:", user);
          const newUser = {
            ...user,
            email: email,
            firstName: firstName,
            lastName: lastName,
          };
          updataUser(newUser);
          window.location.reload();

        } else if (response.status === 401) {
          const dota = await response.json();
          console.error("Error:", dota.message);
        } else {
          const dota = await response.json();
          console.error("Error:", dota.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    console.log("Data:", data);
    updateUser(data);
  };

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      {user && (
        <Box
          className="
      p-8 
      "
        >
          {" "}
          <Heading position={"sticky"} top={10}>
            Settings
          </Heading>
          <form className="p-8 md:w-2/3 mx-auto " onSubmit={handleSubmit}>
            <Flex gap={4} width={"100%"}>
              <Box style={{ marginBottom: "10px" }} width={"50%"}>
                <label
                  htmlFor="firstName"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={user.firstName}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #E5E5E5",
                    outline: "none",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </Box>
              <Box style={{ marginBottom: "10px" }} width={"50%"}>
                <label
                  htmlFor="LastName"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="LastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={user.lastName}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #E5E5E5",
                    outline: "none",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </Box>
            </Flex>
            <Flex gap={4} width={"100%"}>
              <Box style={{ marginBottom: "10px" }} width={"50%"}>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={user.email}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #E5E5E5",
                    outline: "none",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </Box>
              <Box style={{ marginBottom: "10px" }} width={"50%"}>
                <label
                  htmlFor="phone"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="0658598146"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #E5E5E5",
                    outline: "none",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </Box>
            </Flex>
            <Box style={{ marginBottom: "10px" }}>
              <label
                htmlFor="address"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Aflou, Laghouat, Algeria"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #E5E5E5",
                  outline: "none",
                  backgroundColor: "#F2F2F2",
                }}
              />
            </Box>
            <Flex gap={2} width={"100%"} direction={"column"}>
              <label
                htmlFor="Currentpassword"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Change Passowrd
              </label>
              <input
                type="password"
                id="Currentpassword"
                name="Currentpassword"
                placeholder="Current Password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #E5E5E5",
                  outline: "none",
                  backgroundColor: "#F2F2F2",
                }}
              />
              <input
                type="password"
                id="NewPassword"
                name="NewPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #E5E5E5",
                  outline: "none",
                  backgroundColor: "#F2F2F2",
                }}
              />
              <input
                type="password"
                id="confirmNewPassword"
                name="ConfirmNewPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm New Password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #E5E5E5",
                  outline: "none",
                  backgroundColor: "#F2F2F2",
                }}
              />
            </Flex>
            <Flex
              gap={4}
              mt={4}
              direction={{ base: "column", md: "row" }}
              justifyContent={"end"}
            >
              <Button
                mt={{ base: 2, md: 4 }}
                position={"relative"}
                onClick={() => {
                  // setP1(true);
                  // setP2(false);
                  // setP3(false);
                  // setP4(false);
                  // setP5(false); // *************************************************************
                  // setFocused(!focused);
                  // close();
                  setP5(false);
                  toast({
                    title: "Changes were not saved",
                    status: "error",
                  });
                }}
                colorScheme="red"
              >
                Cancel
              </Button>
              <Button
                mt={{ base: 2, md: 4 }}
                position={"relative"}
                onClick={() => {
                  // setP1(true);
                  // setP2(false);
                  // setP3(false);
                  // setP4(false);
                  // setP5(false); // *************************************************************
                  // setFocused(!focused);
                  // close();
                  toast({
                    title: "Changes saved successfully !",
                    status: "success",
                  });
                }}
                colorScheme="green"
                type="submit"
              >
                Save
              </Button>
            </Flex>
          </form>
        </Box>
      )}
    </>
  );
};

export default Settings;
