import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import Box from "@material-ui/core/Box";

const PageTemplate = ({ children }) => (
  <Box bgcolor="text.disabled">
    <Navbar />
    {children}
    <Footer />
  </Box>
);

export default PageTemplate;
