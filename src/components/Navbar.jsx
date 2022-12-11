import React from "react";
import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavList from "./NavList";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <HStack h={"24"} bgColor={"gray.200"}>
        <Center w={"100%"}>
          <Box
            display={{
              base: "grid",
              md: "none",
            }}
            ml={{
              base: "3",
              sm: "5",
            }}
            ref={btnRef}
            onClick={onOpen}
          >
            <RxHamburgerMenu size={26} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement={"left"}
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Visit Our Pages</DrawerHeader>
              <DrawerBody>
                {NavList.map((e, i) => {
                  return (
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      mb={"5"}
                      key={i}
                    >
                      <Link to={e.url} className="link">
                        {e.text}
                      </Link>
                    </Box>
                  );
                })}
              </DrawerBody>
              <DrawerFooter>created by :- Aditya Jawanjal</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Box
            fontFamily={"cursive"}
            fontSize={{
              base: "1.8rem",
              "2xl": "2.5rem",
            }}
            w={"100%"}
            textAlign={{
              base: "center",
              md: "left",
            }}
            ml={{
              md: "10",
            }}
          >
            Guyzzz
          </Box>
          <Spacer />
          <Box
            position={"absolute"}
            right={"2"}
            fontSize={{
              md: "1.1rem",
              xl: "1.3rem",
            }}
            fontFamily={"revert"}
            display={{
              base: "none",
              md: "block",
            }}
          >
            {NavList.map((e, i) => {
              return (
                <React.Fragment key={i}>
                  <Link
                    to={e.url}
                    className="link"
                    style={{ marginRight: "2vw" }}
                  >
                    {e.text}
                  </Link>
                </React.Fragment>
              );
            })}
          </Box>
        </Center>
      </HStack>
    </>
  );
};

export default Navbar;
