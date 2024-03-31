import { useState } from "react";
import { Box, Button, Text, Image, Flex, CloseButton } from "@chakra-ui/react";
import { GooglePlayLogo } from "phosphor-react";
import {SlideshowMobile} from "./SlideShow";

const UseMobile = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    if (!isOpen && !isTransitioning) {
        return (
            <SlideshowMobile />
        );
    }

    const handleClose = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsTransitioning(false);
        }, 500);
    };

    return (
        <Box
            p={4}
            textAlign="center"
            bg={"gold"}
            position="relative"
            opacity={isTransitioning ? 0 : 1}
            transition="opacity 0.5s ease"
        >
            <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={handleClose}
            />
            <Flex justify={"center"} align={"center"} direction={"column"}>
                <Image src="src/Assets/blacklogo.png" alt="MyVet Logo" width={"55%"} />
                <Text mb={4}>
                    This application is best experienced on our mobile app.
                </Text>
                <Flex justify={"center"} align={"center"} gap={4}>
                    <Button
                        width={"50%"}
                        colorScheme="blue"
                        as="a"
                        href="https://play.google.com/store/apps/details?id=com.myvet"
                    >
                        <GooglePlayLogo size={16} />
                        <p className="ml-2 text-xs">Download Now !</p>
                    </Button>
                    <Button
                        colorScheme="gray"
                        width={"50%"}
                        onClick={handleClose}
                    >
                        <p className="text-xs">Continue to Website</p>
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default UseMobile;