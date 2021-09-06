import React from "react";
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainTemplate = ({ children }) => (
  <Box bgcolor="#eeeeee" marginBottom="64px" >
    <Navbar />
    {children}
    <Box  display={{ xs: "none", sm: "none", md: "block" }}>
      <Footer />
    </Box>
  </Box>
);

MainTemplate.propTypes = {
    children: PropTypes.element
}

export default MainTemplate;
