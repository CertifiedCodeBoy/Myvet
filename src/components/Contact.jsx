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
    return (
        <>
        <Box
        bgColor="#eaeae6"
        p={6}
        borderRadius="md"
        display="flex"
        alignItems="center"
      >
        <Box boxSize={6} color="gray.500" ml={36} />{" "}
        <BellIcon color="gray.500" mr={2} fontSize={28} />
        <Flex direction="column" ml={2}>
          <Heading fontSize="medium">
            Wait times for chat support are longer than usual
          </Heading>
          <Text>Check back later, or search our Help Center for answers.</Text>
        </Flex>
      </Box>
        <Flex direction="column" w={'50%'} mx={'auto'} align="center" justify="center" my={8} >
            <Heading color="black" m={8}>Contact Us</Heading>
            <Box
                as="form"
                w="sm"
                m={8}
            >
                <Heading size="md" fontWeight={'medium'} mb={2} >
                    Tell us more about your issue
                </Heading>
                <Stack spacing={3}>
                    <FormControl id="name">
                        <Input type="text" placeholder="Name" />
                    </FormControl>
                    <FormControl id="email">
                        <Input type="email" placeholder="Email" />
                    </FormControl>
                    <FormControl id="message">
                        <Textarea placeholder="Message " />
                    </FormControl>
                    <Button
                        type="submit"
                        justifyContent={'center'}
                        alignContent={'center'}
                    >
                        Submit
                    </Button>
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
        </>
    );
};

export default Contact;
