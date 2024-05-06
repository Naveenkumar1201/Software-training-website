import React from "react";
import Headers from "./header";
import Body1 from "./body1";
import About from "./about";
import Projects from "./projects";
import Resume from "./resume";
import Contact from "./contact";
import Footer from "./footer";
import User from "./user";

const Mainpage = () => {
  return (
    <>
      <Headers />
      <Body1 />
      <Resume />
      <Projects />
      <User />
      <About />
      <Contact />
      <Footer />
    </>
  );
};
export default Mainpage;
