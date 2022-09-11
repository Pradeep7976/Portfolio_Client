import { Box, Center, Text, Button, useColorModeValue } from "@chakra-ui/react";

import "./Projcard.css";

import { BsGithub } from "react-icons/bs";

function Projcard(props) {
  return (
    <Center py={6}>
      <Box
        maxW={"80vw"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        className="projbox"
      >
        <Text
          textAlign={"left"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
          fontSize={"xl"}
          fontFamily={"body"}
          fontWeight="bold"
          className="pcardhead"
        >
          {props.dat.name}
        </Text>
        <Text paddingLeft={2} textAlign={"left"} fontWeight={"600"}>
          {props.dat.sub}
        </Text>
        <Text
          textAlign={"left"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
          paddingBottom={"3"}
        >
          {props.dat.about.map((dat, index) => {
            return <li>{dat}</li>;
          })}
        </Text>
        <a href={props.dat.link} target={"blank"}>
          <Button
            fontSize={"sm"}
            rounded={"full"}
            bg={"black"}
            color={"white"}
            _hover={{
              bg: "#2f3d3d",
            }}
            _focus={{
              bg: "black",
            }}
            placeItems={"left"}
          >
            <BsGithub />
            <Center>
              {/* <Link paddingLeft={2}>Github</Link> */}
              <Text paddingLeft={2}>Github</Text>
            </Center>
          </Button>
        </a>
      </Box>
    </Center>
  );
}
export default Projcard;
