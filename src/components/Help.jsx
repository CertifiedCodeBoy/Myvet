import React, { useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  InputGroup,
  Input,
  Button,
  Stack,
  Link,
  InputLeftElement,
  InputRightElement,
  Divider,
  Spacer,
  Grid,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { User } from "phosphor-react";
import Contact from "./Contact";

  const faqData = [
    {
      question: "How do I sign up for Myvet?",
      answer:
        "To sign up for Myvet, go to the Myvet website and click on the 'Sign Up' button. Follow the instructions to create your account and choose a subscription plan.",
    },
    {
      question: "What are the different plans and pricing options?",
      answer:
        "Myvet offers different subscription plans with varying prices. You can choose between Basic, Standard, and Premium plans, each offering different features.",
    },
    {
      question: "I can't sign in to my Myvet account. What should I do?",
      answer:
        "If you're having trouble signing in to your Myvet account, make sure you're entering the correct email address and password. You can also try resetting your password or contacting Myvet support for further assistance.",
    },
    {
      question: "I can't sign in to my Myvet account. What should I do?",
      answer:
        "If you're having trouble signing in to your Myvet account, make sure you're entering the correct email address and password. You can also try resetting your password or contacting Myvet support for further assistance.",
    },
    {
      question: "I can't sign in to my Myvet account. What should I do?",
      answer:
        "If you're having trouble signing in to your Myvet account, make sure you're entering the correct email address and password. You can also try resetting your password or contacting Myvet support for further assistance.",
    },
    {
      question: "I can't sign in to my Myvet account. What should I do?",
      answer:
        "If you're having trouble signing in to your Myvet account, make sure you're entering the correct email address and password. You can also try resetting your password or contacting Myvet support for further assistance.",
    },
  ];

const Help = () => {
  const history = useNavigate();
  const handleContactUsClick = () => {
    history("/Contact");
  };

  return (
    <Box className="flex-1 mx-auto">
      <Box py={20} bgColor="#f2f2f2">
        <Stack
          width={{ base: "85%", md: "75%", lg: "65%", xl: "55%" }}
          mx="auto"
          position={"relative"}
        >
          <Flex
            direction={"column"}
            justify={"center"}
            gap={8}
            align={"center"}
            mb={8}
          >
            <Heading textAlign="center" size={"2xl"} color={"black"} fontWeight={'semibold'}>
              Get Help
            </Heading>

            <InputGroup
              w={{ base: "80%", md: "50%" }}
              boxShadow="lg"
              borderRadius="full"
            >
              <Flex justify={"center"} align={"center"} w={"100%"}>
                <InputRightElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.700" />}
                  pr={2}
                />
                <Input
                  pl={4}
                  pr={10}
                  float={"none"}
                  bg="white"
                  type="text"
                  placeholder="What can we help you with"
                  border="none"
                  _placeholder={{ opacity: 1, color: "gray.700" }}
                  _focus={{ boxShadow: "none" }}
                />
              </Flex>
            </InputGroup>
            <Spacer/>
          </Flex>
          <Heading textAlign={"start"} fontWeight={'middle'}>Quick Assist</Heading>
          <Text>Answers to our most frequently asked questions are just one click away.</Text>
          <Divider borderColor={'black'} mb={4}/>
            <Accordion allowMultiple>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={6}>
              {faqData.map((faq, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {faq.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
              </Grid>
            </Accordion>
          <Contact/>
              </Stack>
      </Box>
    </Box>
  );
};

export default Help;
