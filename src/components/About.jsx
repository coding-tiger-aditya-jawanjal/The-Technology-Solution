import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Center minH={"73.2vh"}>
        <Box
          color={"aliceblue"}
          w={"45vw"}
          p={"14"}
          bgColor={"whatsapp.900"}
          borderTopRightRadius={{ md: "150px" }}
          borderBottomRightRadius={{ md: "150px" }}
        >
          <Heading as={"h3"} fontSize={"2rem"} mb={"5"}>
            About Us
          </Heading>
          <Text fontSize={"1.2rem"} textAlign={{ md: "justify" }}>
            We are the leading software developers in our country. Feel free to
            connect me for work. I am also available for remote work and
            freelancing. This project is done using React.Js and Chakra UI.
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default About;
