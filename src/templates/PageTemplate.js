import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card/Card";

const PageTemplate = ({ children }) => (
  <Box bgcolor="text.disabled">
    <Navbar />
    {children}
    <Box display={{ xs: "none", sm: "none", md: "block" }}>
      <Footer />
    </Box>
  </Box>
);

export default PageTemplate;
