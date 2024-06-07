import { Box, Heading, Grid, Flex, Image, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { CaretRight, TShirt } from "phosphor-react";
import { Pants } from "@phosphor-icons/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const PreCategory = () => {
  const { category } = useParams();

  useEffect(() => {
    ScrollReveal().reveal(".box0", {
      distance: "800px",
      origin: "left",
      duration: 800,
      delay: 200,
      reset: false,
      easing: "ease-in-out",
      opacity: 0,
      interval: 50, // Add this line
    });
    ScrollReveal().reveal(".box2", {
      distance: "40px",
      origin: "left",
      duration: 800,
      delay: 200,
      reset: false,
      easing: "ease-in-out",
      interval: 50, // Add this line
    });
    ScrollReveal().reveal(".box3", {
      distance: "100px",
      origin: "right",
      duration: 800,
      delay: 200,
      reset: false,
      easing: "ease-in-out",
      interval: 50, // Add this line
    });
  }, []);

  return (
    <Box p={20} bg={"gray.100"}>
      <Box>
        <Breadcrumb
          spacing="8px"
          separator={<CaretRight color="black" size={18} />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href={`/Myvet/#/PreCategory/${category}`}>
              Category
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{category}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Heading as="h1" size="xl" textAlign="center" my={10}>
        {category}
      </Heading>
      {category == "Men" || "Women" || "Kids" ? (
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={6}
          p={4}
          bg={"gray.100"}
        >
          <Box
            className="box"
            gridRow="span 2"
            gridColumnStart={1}
            gridColumnEnd={3}
            bg="blue.500"
            borderRadius="md"
            h="full"
            position="relative"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.01)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="linear(to top, rgba(0, 0, 0, 0.7), transparent)"
              borderRadius="md"
            />
            <Heading
              as="h2"
              size="xl"
              textAlign="center"
              position="absolute"
              top={"80%"}
              left={0}
              right={0}
              color="white"
              zIndex={1}
            >
              <Link
                to={
                  category == "Accessories"
                    ? "/Categories/jewelry"
                    : "/Categories/Hoodies"
                }
                className="hover:underline"
              >
                {category == "Accessories" ? "Bracelets" : "Hoodies"}
              </Link>
            </Heading>
            <Box
              bgImage={
                category == "Women"
                  ? "url('src/Assets/Hoodie.jpg')"
                  : category == "Men"
                  ? "url('src/Assets/Hoodie1.jpg')"
                  : category == "Kids"
                  ? "url('src/Assets/kids1.jpg')"
                  : "url('src/Assets/jews.jpg')"
              }
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              borderRadius="md"
              h="full"
            />
          </Box>
          <Box
            className="box2"
            gridColumn="3 / 4"
            bg="purple.500"
            borderRadius="md"
            h="full"
            position="relative"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.8)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Flex
              direction="column"
              h="full"
              justify="space-between"
              alignItems={"center"}
              p={4}
            >
              <Box mt={20}>
                {/* Place your logo here */}
                <TShirt weight="fill" size={80} color={"white"} />
              </Box>
              <Box>
                {/* Place your category name here */}
                <Text
                  fontSize="3xl"
                  color={"white"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  marginBottom={8}
                >
                  <Link to={`/Categories/TShirt`} className="hover:underline">
                    Shirts
                  </Link>
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            className="box3"
            gridColumn="4 / 5"
            bg="yellow.500"
            borderRadius="md"
            h="full"
            position="relative"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.8)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Flex
              direction="column"
              h="full"
              justify="space-between"
              alignItems={"center"}
              p={4}
            >
              <Box mt={20}>
                {/* Place your logo here */}
                <Pants weight="fill" size={80} color={"white"} />
              </Box>
              <Box>
                {/* Place your category name here */}
                <Text
                  fontSize="3xl"
                  color={"white"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  marginBottom={8}
                >
                  <Link
                    to={
                      category == "Accessories"
                        ? "/Categories/jewelry"
                        : "/Categories/Pants"
                    }
                    className="hover:underline"
                  >
                    {category == "Accessories" ? "Bracelets" : "Hoodies"}
                  </Link>
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            className="box2"
            gridColumn="3 / 4"
            bg="green.500"
            borderRadius="md"
            h="full"
            position="relative"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.8)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Flex
              direction="column"
              h="full"
              justify="space-between"
              alignItems={"center"}
              p={4}
            >
              <Box mt={20}>
                {/* Place your logo here */}
                <svg
                  fill="#ffffff"
                  height="100px"
                  width="100px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-38.14 -38.14 457.65 457.65"
                  xml:space="preserve"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.76275"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M350.523,263.228c-1.234-21.223-2.77-47.633-4.117-81.119C341.128,51.035,300.509,20.707,298.782,19.48l-0.004,0.006 c-4.49-2.583-54.295-19.207-54.295-19.207c-1.527-0.531-3.223-0.297-4.545,0.643c-1.074,0.764-1.785,1.913-2.017,3.187 c0-0.001-3.906,14.448-47.233,14.448c-43.328,0-47.233-14.45-47.234-14.449c-0.23-1.273-0.942-2.423-2.018-3.185 c-1.32-0.939-3.018-1.174-4.543-0.643c0,0-46.67,15.734-54.295,19.209l-0.006-0.008c-1.727,1.226-42.346,31.555-47.621,162.629 c-1.348,33.49-2.885,59.902-4.119,81.127c-3.301,56.773-4.44,76.527,6.123,93.79l3.625,20.229c0.428,2.385,2.5,4.119,4.922,4.119 h36.191c2.42,0,4.494-1.734,4.922-4.117l3.475-19.382c3.379-3.24,9.619-11.769,13.38-32.47h174.396 c3.762,20.704,10.004,29.232,13.381,32.471l3.473,19.379c0.428,2.385,2.502,4.119,4.922,4.119h36.191 c2.422,0,4.494-1.734,4.922-4.119l3.627-20.229C354.964,339.763,353.823,320.008,350.523,263.228z M247.464,11.916l40.189,14.057 c-3.338,4.881-7.74,12.726-10.691,23.357c-4.697,16.92-6.498,44.518,11.402,80.158c0.994,7.801,8.434,72.115-4.695,155.459h-87.981 V70.052C221.558,67.072,244.322,41.398,247.464,11.916z M190.688,28.556c23.154,0,36.927-4.003,45.12-8.676 c-2.334,8.627-6.617,16.85-12.514,23.729c-9.12,10.633-21.005,16.732-32.606,16.732c-11.604,0-23.488-6.1-32.605-16.732 c-5.898-6.879-10.181-15.102-12.514-23.728C153.762,24.553,167.533,28.556,190.688,28.556z M133.912,11.916 c3.143,29.482,25.904,55.156,51.775,58.137v214.895h-87.98c-13.131-83.344-5.691-147.658-4.695-155.459 c17.9-35.641,16.098-63.238,11.4-80.158c-2.951-10.631-7.354-18.477-10.69-23.357L133.912,11.916z M77.53,371.375H49.705 l-1.999-11.156H79.53L77.53,371.375z M83.58,350.219H44.576c-7.924-14.455-6.791-33.924-3.74-86.402 c1.236-21.264,2.775-47.727,4.127-81.305c2.635-65.467,14.354-104.148,23.721-125.07c6.412-14.322,12.605-22.457,16.295-26.506 c2.9,4.113,7.2,11.42,9.949,21.625c5.973,22.166,2.199,46.781-11.219,73.162c-0.248,0.488-0.414,1.014-0.492,1.557 c-0.123,0.859-12.026,86.929,10.96,193.262C91.039,340.278,85.668,347.91,83.58,350.219z M103.303,315.406 c-1.458-6.919-2.762-13.742-3.934-20.459h86.318v20.459H103.303z M195.688,315.406v-20.459h86.319 c-1.172,6.717-2.477,13.54-3.934,20.459H195.688z M331.669,371.375h-27.824l-2-11.156h31.824L331.669,371.375z M336.8,350.219 h-39.006c-2.088-2.309-7.457-9.94-10.596-29.678c22.986-106.333,11.084-192.402,10.959-193.262 c-0.078-0.543-0.244-1.068-0.492-1.557c-13.416-26.381-17.191-50.996-11.219-73.162c2.756-10.234,7.074-17.557,9.973-21.66 c9.514,10.34,35.822,48.029,39.994,151.611c1.352,33.574,2.891,60.035,4.127,81.297C343.591,316.295,344.724,335.763,336.8,350.219z "></path>{" "}
                  </g>
                </svg>
              </Box>
              <Box>
                {/* Place your category name here */}
                <Text
                  fontSize="3xl"
                  color={"white"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  marginBottom={8}
                >
                  <Link to={`/Categories/Jacket`} className="hover:underline">
                    Jackets
                  </Link>
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            className="box3"
            gridColumn="4 / 5"
            bg="red.500"
            borderRadius="md"
            h="full"
            position="relative"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.8)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Flex
              direction="column"
              h="full"
              justify="space-between"
              alignItems={"center"}
              p={4}
            >
              <Box mt={20}>
                {/* Place your logo here */}
                <svg
                  fill="#ffffff"
                  height="90px"
                  width="90px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 399.199 399.199"
                  xml:space="preserve"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M354.334,118.897c-11.729-51.721-25.311-75.372-25.311-75.372C301.385,18.658,256.984,1.211,254.81,0.351 c-1.539-0.609-3.279-0.417-4.65,0.515c-0.379,0.258-11.037,10.668-50.561,10.668h-0.002l0,0c-39.627,0-50.223-10.439-50.561-10.668 c-1.371-0.932-3.113-1.124-4.65-0.515C142.213,1.21,94.488,18.658,70.17,43.522c-0.762,0.779-13.578,23.654-25.307,75.375 c-10.734,47.333-22.34,129.157-16.695,250.19v25.111c0,2.76,2.238,5,5,5h45.336c2.416,0,4.486-1.729,4.918-4.105l4.568-25.082 l9.141-38.57c1.355,5.461,2.895,10.711,4.635,15.709l4.525,25.914c0.418,2.393,2.496,4.141,4.926,4.141H287.98 c2.43,0,4.508-1.748,4.926-4.141l4.525-25.914c1.74-4.998,3.279-10.248,4.635-15.711l9.139,38.572l4.568,25.082 c0.434,2.377,2.504,4.105,4.92,4.105h45.338c2.762,0,5-2.24,5-5v-25.111C376.676,248.054,365.068,166.23,354.334,118.897z M199.597,21.533L199.597,21.533h0.002c23.824,0,38.176-3.4,46.559-6.779c-5.727,15.147-24.424,26.286-46.559,26.286h-0.002l0,0 c-22.135,0-40.832-11.139-46.557-26.286C161.424,18.133,175.773,21.533,199.597,21.533z M210.361,50.254l-10.764,11.517 l-10.762-11.517c3.488,0.515,7.086,0.786,10.762,0.786l0,0h0.002C203.275,51.04,206.871,50.769,210.361,50.254z M74.332,389.199 H38.168v-15.215h38.934L74.332,389.199z M94.793,126.687c-4.342,47.976-11.029,121.925-2.295,180.933L79.14,363.984H37.947 c-5.066-116.893,6.127-196.08,16.498-242.118c8.771-38.941,18.416-61.26,22.438-69.556c6.85,3.216,20.727,12.565,20.727,35.573 C97.609,95.57,96.367,109.302,94.793,126.687z M115.418,367.204l-2.842-16.287h174.045l-2.844,16.287H115.418z M296.705,306.87 c-0.018,0.086-4.371,23.752-7.721,34.047H110.213c-3.35-10.291-7.703-33.963-7.723-34.06c-8.717-57.789-2.057-131.547,2.262-179.268 c1.596-17.636,2.857-31.567,2.857-39.706c0-25.794-14.723-38.092-24.143-43.32c16.563-13.689,45.807-26.953,58.471-32.365 c2.756,13.782,13.293,25.549,27.938,32.412l26.07,27.899c0.984,1.054,2.318,1.586,3.654,1.586c1.223,0,2.449-0.446,3.414-1.347 c0.084-0.079,26.307-28.139,26.307-28.139c14.646-6.862,25.184-18.631,27.939-32.413c12.662,5.41,41.9,18.667,58.471,32.365 c-9.42,5.228-24.141,17.527-24.141,43.321c0,8.139,1.26,22.068,2.855,39.704C298.765,175.311,305.426,249.077,296.705,306.87z M361.031,389.199h-36.166l-2.771-15.215h38.938V389.199z M361.25,363.984h-41.195l-13.355-56.367 c8.736-59.006,2.047-132.956-2.295-180.93c-1.572-17.385-2.814-31.116-2.814-38.803c0-23.015,13.885-32.363,20.721-35.573 C331.474,71.278,369.935,163.781,361.25,363.984z"></path>{" "}
                  </g>
                </svg>
              </Box>
              <Box>
                {/* Place your category name here */}
                <Text
                  fontSize="3xl"
                  color={"white"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  marginBottom={8}
                >
                  <Link to={`/Categories/Sweater`} className="hover:underline">
                    Sweaters
                  </Link>
                </Text>
              </Box>
            </Flex>
          </Box>
        </Grid>
      ) : category == "Accessories" ? (
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={6}
          p={4}
          bg={"gray.100"}
        >
          <Box
            className="box"
            gridRow="span 2"
            gridColumnStart={1}
            gridColumnEnd={3}
            bg="blue.500"
            borderRadius="md"
            h="full"
            position="relative"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.01)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="linear(to top, rgba(0, 0, 0, 0.7), transparent)"
              borderRadius="md"
            />
            <Heading
              as="h2"
              size="xl"
              textAlign="center"
              position="absolute"
              top={"80%"}
              left={0}
              right={0}
              color="white"
              zIndex={1}
            >
              <Link to={`/Categories/Hoodies`} className="hover:underline">
                HAHA
              </Link>
            </Heading>
            <Box
              bgImage={"url('src/Assets/jews.jpg')"}
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              borderRadius="md"
              h="full"
            />
          </Box>
          <Box
            className="box2"
            gridColumn="3 / 4"
            bg="purple.500"
            borderRadius="md"
            h="full"
            position="relative"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.8)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Flex
              direction="column"
              h="full"
              justify="space-between"
              alignItems={"center"}
              p={4}
            >
              <Box mt={20}>
                {/* Place your logo here */}
                <TShirt weight="fill" size={80} color={"white"} />
              </Box>
              <Box>
                {/* Place your category name here */}
                <Text
                  fontSize="3xl"
                  color={"white"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  marginBottom={8}
                >
                  Shirts
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box
            className="box2"
            gridColumn="3 / 4"
            bg="green.500"
            borderRadius="md"
            h="full"
            position="relative"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.8)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Flex
              direction="column"
              h="full"
              justify="space-between"
              alignItems={"center"}
              p={4}
            >
              <Box mt={20}>
                {/* Place your logo here */}
                <svg
                  fill="#ffffff"
                  height="100px"
                  width="100px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-38.14 -38.14 457.65 457.65"
                  xml:space="preserve"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.76275"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M350.523,263.228c-1.234-21.223-2.77-47.633-4.117-81.119C341.128,51.035,300.509,20.707,298.782,19.48l-0.004,0.006 c-4.49-2.583-54.295-19.207-54.295-19.207c-1.527-0.531-3.223-0.297-4.545,0.643c-1.074,0.764-1.785,1.913-2.017,3.187 c0-0.001-3.906,14.448-47.233,14.448c-43.328,0-47.233-14.45-47.234-14.449c-0.23-1.273-0.942-2.423-2.018-3.185 c-1.32-0.939-3.018-1.174-4.543-0.643c0,0-46.67,15.734-54.295,19.209l-0.006-0.008c-1.727,1.226-42.346,31.555-47.621,162.629 c-1.348,33.49-2.885,59.902-4.119,81.127c-3.301,56.773-4.44,76.527,6.123,93.79l3.625,20.229c0.428,2.385,2.5,4.119,4.922,4.119 h36.191c2.42,0,4.494-1.734,4.922-4.117l3.475-19.382c3.379-3.24,9.619-11.769,13.38-32.47h174.396 c3.762,20.704,10.004,29.232,13.381,32.471l3.473,19.379c0.428,2.385,2.502,4.119,4.922,4.119h36.191 c2.422,0,4.494-1.734,4.922-4.119l3.627-20.229C354.964,339.763,353.823,320.008,350.523,263.228z M247.464,11.916l40.189,14.057 c-3.338,4.881-7.74,12.726-10.691,23.357c-4.697,16.92-6.498,44.518,11.402,80.158c0.994,7.801,8.434,72.115-4.695,155.459h-87.981 V70.052C221.558,67.072,244.322,41.398,247.464,11.916z M190.688,28.556c23.154,0,36.927-4.003,45.12-8.676 c-2.334,8.627-6.617,16.85-12.514,23.729c-9.12,10.633-21.005,16.732-32.606,16.732c-11.604,0-23.488-6.1-32.605-16.732 c-5.898-6.879-10.181-15.102-12.514-23.728C153.762,24.553,167.533,28.556,190.688,28.556z M133.912,11.916 c3.143,29.482,25.904,55.156,51.775,58.137v214.895h-87.98c-13.131-83.344-5.691-147.658-4.695-155.459 c17.9-35.641,16.098-63.238,11.4-80.158c-2.951-10.631-7.354-18.477-10.69-23.357L133.912,11.916z M77.53,371.375H49.705 l-1.999-11.156H79.53L77.53,371.375z M83.58,350.219H44.576c-7.924-14.455-6.791-33.924-3.74-86.402 c1.236-21.264,2.775-47.727,4.127-81.305c2.635-65.467,14.354-104.148,23.721-125.07c6.412-14.322,12.605-22.457,16.295-26.506 c2.9,4.113,7.2,11.42,9.949,21.625c5.973,22.166,2.199,46.781-11.219,73.162c-0.248,0.488-0.414,1.014-0.492,1.557 c-0.123,0.859-12.026,86.929,10.96,193.262C91.039,340.278,85.668,347.91,83.58,350.219z M103.303,315.406 c-1.458-6.919-2.762-13.742-3.934-20.459h86.318v20.459H103.303z M195.688,315.406v-20.459h86.319 c-1.172,6.717-2.477,13.54-3.934,20.459H195.688z M331.669,371.375h-27.824l-2-11.156h31.824L331.669,371.375z M336.8,350.219 h-39.006c-2.088-2.309-7.457-9.94-10.596-29.678c22.986-106.333,11.084-192.402,10.959-193.262 c-0.078-0.543-0.244-1.068-0.492-1.557c-13.416-26.381-17.191-50.996-11.219-73.162c2.756-10.234,7.074-17.557,9.973-21.66 c9.514,10.34,35.822,48.029,39.994,151.611c1.352,33.574,2.891,60.035,4.127,81.297C343.591,316.295,344.724,335.763,336.8,350.219z "></path>{" "}
                  </g>
                </svg>
              </Box>
              <Box>
                {/* Place your category name here */}
                <Text
                  fontSize="3xl"
                  color={"white"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  marginBottom={8}
                >
                  Jackets
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            className="box3"
            gridColumn="4 / 5"
            bg="red.500"
            borderRadius="md"
            h="full"
            position="relative"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.8)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Flex
              direction="column"
              h="full"
              justify="space-between"
              alignItems={"center"}
              p={4}
            >
              <Box mt={20}>
                {/* Place your logo here */}
                <svg
                  fill="#ffffff"
                  height="90px"
                  width="90px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 399.199 399.199"
                  xml:space="preserve"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M354.334,118.897c-11.729-51.721-25.311-75.372-25.311-75.372C301.385,18.658,256.984,1.211,254.81,0.351 c-1.539-0.609-3.279-0.417-4.65,0.515c-0.379,0.258-11.037,10.668-50.561,10.668h-0.002l0,0c-39.627,0-50.223-10.439-50.561-10.668 c-1.371-0.932-3.113-1.124-4.65-0.515C142.213,1.21,94.488,18.658,70.17,43.522c-0.762,0.779-13.578,23.654-25.307,75.375 c-10.734,47.333-22.34,129.157-16.695,250.19v25.111c0,2.76,2.238,5,5,5h45.336c2.416,0,4.486-1.729,4.918-4.105l4.568-25.082 l9.141-38.57c1.355,5.461,2.895,10.711,4.635,15.709l4.525,25.914c0.418,2.393,2.496,4.141,4.926,4.141H287.98 c2.43,0,4.508-1.748,4.926-4.141l4.525-25.914c1.74-4.998,3.279-10.248,4.635-15.711l9.139,38.572l4.568,25.082 c0.434,2.377,2.504,4.105,4.92,4.105h45.338c2.762,0,5-2.24,5-5v-25.111C376.676,248.054,365.068,166.23,354.334,118.897z M199.597,21.533L199.597,21.533h0.002c23.824,0,38.176-3.4,46.559-6.779c-5.727,15.147-24.424,26.286-46.559,26.286h-0.002l0,0 c-22.135,0-40.832-11.139-46.557-26.286C161.424,18.133,175.773,21.533,199.597,21.533z M210.361,50.254l-10.764,11.517 l-10.762-11.517c3.488,0.515,7.086,0.786,10.762,0.786l0,0h0.002C203.275,51.04,206.871,50.769,210.361,50.254z M74.332,389.199 H38.168v-15.215h38.934L74.332,389.199z M94.793,126.687c-4.342,47.976-11.029,121.925-2.295,180.933L79.14,363.984H37.947 c-5.066-116.893,6.127-196.08,16.498-242.118c8.771-38.941,18.416-61.26,22.438-69.556c6.85,3.216,20.727,12.565,20.727,35.573 C97.609,95.57,96.367,109.302,94.793,126.687z M115.418,367.204l-2.842-16.287h174.045l-2.844,16.287H115.418z M296.705,306.87 c-0.018,0.086-4.371,23.752-7.721,34.047H110.213c-3.35-10.291-7.703-33.963-7.723-34.06c-8.717-57.789-2.057-131.547,2.262-179.268 c1.596-17.636,2.857-31.567,2.857-39.706c0-25.794-14.723-38.092-24.143-43.32c16.563-13.689,45.807-26.953,58.471-32.365 c2.756,13.782,13.293,25.549,27.938,32.412l26.07,27.899c0.984,1.054,2.318,1.586,3.654,1.586c1.223,0,2.449-0.446,3.414-1.347 c0.084-0.079,26.307-28.139,26.307-28.139c14.646-6.862,25.184-18.631,27.939-32.413c12.662,5.41,41.9,18.667,58.471,32.365 c-9.42,5.228-24.141,17.527-24.141,43.321c0,8.139,1.26,22.068,2.855,39.704C298.765,175.311,305.426,249.077,296.705,306.87z M361.031,389.199h-36.166l-2.771-15.215h38.938V389.199z M361.25,363.984h-41.195l-13.355-56.367 c8.736-59.006,2.047-132.956-2.295-180.93c-1.572-17.385-2.814-31.116-2.814-38.803c0-23.015,13.885-32.363,20.721-35.573 C331.474,71.278,369.935,163.781,361.25,363.984z"></path>{" "}
                  </g>
                </svg>
              </Box>
              <Box>
                {/* Place your category name here */}
                <Text
                  fontSize="3xl"
                  color={"white"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  marginBottom={8}
                >
                  Sweaters
                </Text>
              </Box>
            </Flex>
          </Box>
        </Grid>
      ) : null}
    </Box>
  );
};

export default PreCategory;
