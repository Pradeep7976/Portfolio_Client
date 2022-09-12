import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Img,
  useColorMode,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import "./Navbar.css";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        className="Navbar"
        alignItems={"center"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"}>
            <Avatar>
              <Img
                className="imgn"
                src="https://ik.imagekit.io/aj4rz7nxsa/portfolio/web-icon-logo-A6B586D114-seeklogo.com_9zBcFUjiF.png"
              ></Img>
            </Avatar>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/"}
              >
                Dashboard
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/projects"}
              >
                Projects
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/download"}
              >
                Resume
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  // bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/"}
              >
                Dashboard
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  // bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/projects"}
              >
                Projects
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  // bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/download"}
              >
                Resume
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
export default Navbar;
