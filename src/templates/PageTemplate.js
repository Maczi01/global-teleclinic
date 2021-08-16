import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";

const PageTemplate = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default PageTemplate;
