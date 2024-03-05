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
  Divider,
} from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CreditCard, User } from "phosphor-react";

export const FAQSection = () => {
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
  ];
  return (
    <Box p={4} overflow="hidden" className="container">
    <Flex p={8} mb={4} w={'65%'} mx={'auto'} border="1px" borderRadius="lg" overflow="hidden" direction="column" align="center" justify="center">
      <Flex align="center" justify={'start'} direction="row-reverse" className="relative w-[90%]">
        <Heading size="md" textAlign="center" ml={8}>
          Account
        </Heading>
        <User size={20} className="absolute left-0 " />
      </Flex>
        <Divider w={'90%'} mt={2} />
      <Accordion allowMultiple border="none">
        {faqData.map((faq, index) => (
          <AccordionItem border={'none'} key={index}>
            <h2>
              <AccordionButton>
                <Box fontWeight={'semibold'} flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
    <Flex p={8} mb={4} w={'65%'} mx={'auto'} border="1px" borderRadius="lg" overflow="hidden" direction="column" align="center" justify="center">
      <Flex align="center" justify={'start'} direction="row-reverse" className="relative w-[90%]">
        <Heading size="md" textAlign="center" ml={8}>
          Account
        </Heading>
        <User size={20} className="absolute left-0 " />
      </Flex>
        <Divider w={'90%'} mt={2} />
      <Accordion allowMultiple border="none">
        {faqData.map((faq, index) => (
          <AccordionItem border={'none'} key={index}>
            <h2>
              <AccordionButton>
                <Box fontWeight={'semibold'} flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  </Box>
  );
};

const Help = () => {
  const history = useNavigate();
  const handleContactUsClick = () => {
    history("/Contact");
  };

  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <Box className="flex-1 mx-auto">
      <Stack
      className="flex-1 mx-auto"
        bgColor="#eaeae6"
        p={6}
        justify={'start'}
        direction={'row'}
      >
        <Box boxSize={6} color="gray.500" />{" "}
        <BellIcon color="gray.500" mr={2} fontSize={28} />
        <Flex direction="column" ml={2}>
          <Heading fontSize="medium">
            Wait times for chat support are longer than usual
          </Heading>
          <Text>Check back later, or search our Help Center for answers.</Text>
        </Flex>
      </Stack>

      <Box py={20} bgColor="#f0f0f8">
        <Stack
          h={"60vh"}
          width={{ base: "85%", md: "75%", lg: "65%", xl: "55%" }}
          mx="auto"
          position={"relative"}
          mb={10}
        >
          <Flex
            direction={"column"}
            justify={"center"}
            gap={8}
            align={"center"}
          >
            <Flex></Flex>
            <Heading textAlign="center" size={"2xl"} color={"black"}>
              How can we help?
            </Heading>

            <InputGroup
              w={{ base: "100%", md: "50%" }}
              boxShadow="lg"
              borderRadius="full"
            >
              <Flex justify={"center"} align={"center"} w={"100%"}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.700" />}
                  pr={2}
                />
                <Input
                  pl={8}
                  float={"none"}
                  bg="white"
                  type="text"
                  placeholder="Type a question, topic or issue"
                  border="none"
                  _placeholder={{ opacity: 1, color: "gray.700" }}
                  _focus={{ border: "2px", boxShadow: "none" }}
                />
              </Flex>
            </InputGroup>

            <Flex direction="row" justify="center" gap={2}>
              <Text textAlign="center">Popular topics: </Text>
              <Link
                href="#"
                color="gray"
                _hover={{ color: "black", textDecoration: "underline" }}
              >
                <Text>How to sign up for Myvet</Text>
              </Link>
              <Link
                href="#"
                color="gray"
                _hover={{ color: "black", textDecoration: "underline" }}
              >
                <Text>Plans and Pricing</Text>
              </Link>
              <Link
                href="#"
                color="gray"
                _hover={{ color: "black", textDecoration: "underline" }}
              >
                <Text>Can't sign in to Myvet</Text>
              </Link>
            </Flex>
            <Link
              id="explore-topics-link"
              className="absolute bottom-0"
              onClick={executeScroll}
              display="flex"
              alignItems="center"
              color="black"
              textDecoration="none"
              _hover={{ color: "blue.500" }}
            >
              <Flex
                direction={"column"}
                placeItems={"center"}
                className="hover:animate-bounce"
                _hover={{ color: "black", textDecoration: "underline" }}
              >
                <Text color={'black'}>Explore Topics</Text>
                <ChevronDownIcon w={6} h={6} />
              </Flex>
            </Link>
          </Flex>
        </Stack>
        <Stack
          ref={myRef}
          p={4}
          mt={20}
          mx={"auto"}
          width={{ base: "85%", md: "75%", lg: "65%", xl: "55%" }}
        >
          <FAQSection />
        </Stack>
        <Stack mx={"auto"} w={"60%"} justify={'center'} align={'center'} mt={8}>
            <Heading size={'md'}> Need more help? </Heading>
          <Button onClick={handleContactUsClick} color={'white'} bgColor={'black'} _hover={{bgColor:'gray.800'}} w={'20%'}>Contact Us</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Help;
