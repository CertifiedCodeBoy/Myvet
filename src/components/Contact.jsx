import React from "react";
import {
  EmailIcon,
  LockIcon,
  QuestionIcon,
  AddIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Textarea,
  Button,
  UnorderedList,
  ListItem,
  Link,
  Stack,
  Flex, // Added Flex component
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";


const Contact = () => {
    const [formData, setFormData] = React.useState({
        email: "",
          name: "",
          message: ""
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
          email: "",
          name: "",
          message: ""
        });
      };
  return (
    <Stack >
      <Heading color="black" mt={8} textAlign={"start"} fontWeight={'middle'}>
        Contact Us
      </Heading>
      <Text> Tell us more about your issue.</Text>
      <Divider borderColor={"black"} mb={4} />
      <Flex
        direction="column"
        mx={"auto"}
        align="center"
        justify="center"
        my={8}
        width={{ base: "80%", md:'50%'}}
      >
        <Box as="form" onSubmit={handlesubmit} width={"100%"}>
          <Stack spacing={3}>
            <FormControl id="name">
              <Input type="text" placeholder="Name" onChange={handleChange} name="name" value={formData.name} required/>
            </FormControl>
            <FormControl id="email">
              <Input type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email} required/>
            </FormControl>
            <FormControl id="message">
              <Textarea placeholder="Message " onChange={handleChange} name="message" value={formData.message} required/>
            </FormControl>
            <button
              type="submit"
              className="bg-primary py-2 rounded-md text-[#111] font-semibold hover:bg-gray-300 transition duration-300 ease-in-out w-full"
            >
              Submit
            </button>
          </Stack>
        </Box>
        {/* <Box
                    align="start"
                    p={5}
                >
                    <Heading size="md" mb={5}>
                        Quick Links
                    </Heading>
                    <UnorderedList styleType="none" spacing={3}>
                        <ListItem>
                            <Link href="#">
                                <LockIcon boxSize={6} mr={2} />
                                Reset Password
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Link href="#">
                                <EmailIcon boxSize={6} mr={2} />
                                Update Email
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Link href="#">
                                <QuestionIcon boxSize={6} mr={2} />
                                Get Help Signing In
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Link href="#">
                                <AddIcon boxSize={6} mr={2} />
                                Request Clothes
                            </Link>
                        </ListItem>
                    </UnorderedList>
                </Box> */}
      </Flex>
    </Stack>
  );
};

export default Contact;
