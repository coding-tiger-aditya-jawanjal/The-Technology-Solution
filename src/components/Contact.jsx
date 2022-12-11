import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Center border={"1px solid brown"} minH={"72.3vh"}>
        <Box
          bgColor={"Background"}
          p={"12"}
          w={"60vw"}
          h={"auto"}
          m={"14"}
          borderTopRightRadius={{ md: "150px" }}
          borderBottomRightRadius={{ md: "150px" }}
        >
          <Text fontSize={"3xl"}>Contact Us</Text>
          <FormControl mt={"5"}>
            <FormLabel>Name : </FormLabel>
            <Input
              type={"text"}
              borderColor={"blackAlpha.900"}
              placeholder={"Enter your Name"}
              fontSize={{ base: "70%", sm: "100%" }}
            />
          </FormControl>
          <FormControl mt={"5"}>
            <FormLabel>Email : </FormLabel>
            <Input
              type={"email"}
              borderColor={"blackAlpha.900"}
              placeholder={"Enter your Email"}
              fontSize={{ base: "70%", sm: "100%" }}
            />
          </FormControl>
          <FormControl mt={"5"}>
            <FormLabel>Message : </FormLabel>
            <Textarea
              borderColor={"blackAlpha.900"}
              placeholder={"Enter your Feedback"}
              fontSize={{ base: "70%", sm: "100%" }}
            />
          </FormControl>
          <Button type="submit" mt={"5"} size={"lg"} bgColor={"blue.300"}>
            Submit
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default Contact;
