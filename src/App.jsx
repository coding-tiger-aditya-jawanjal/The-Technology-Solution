import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Flex
          flexDirection={"column"}
          minH={"100vh"}
          justifyContent={"space-between"}
        >
          <Box>
            <Box position={"sticky"} top={"0"}>
              <Navbar />
            </Box>
            <Box bgColor={"blue.900"} minH={"72.3vh"}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
              </Routes>
            </Box>
          </Box>
          <Box>
            <Footer />
          </Box>
        </Flex>
      </BrowserRouter>
    </>
  );
};

export default App;
