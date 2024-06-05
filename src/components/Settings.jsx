import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const Settings = ({close}) => {
  const toast = useToast();
  const { user } = useContext(UserContext);

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
          <form className="p-8 md:w-2/3 mx-auto ">
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
                  close();
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
                  close();
                  toast({
                    title: "Changes saved successfully !",
                    status: "success",
                  });
                }}
                colorScheme="green"
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
