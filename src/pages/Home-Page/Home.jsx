import React from "react";
import SectionHome1 from "./SectionHome1";
import SectionHome2 from "./SectionHome2";
import SectionHome3 from "./SectionHome3";
import SectionHome4 from "./SectionHome4";
import SectionHome5 from "./SectionHome5";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <SectionHome1 />
      <SectionHome2 />
      <SectionHome5 />
      <SectionHome3 />
      <SectionHome4 />
      <Footer />
    </div>
  );
};

export default Home;


