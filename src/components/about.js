import React from "react";
import office from "./asserts/office.jpg";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  const data = {
    head: "About",
    text1:
      "Content development is the process by which you research, analyze, produce, edit, optimize, publish, and promote content with the purpose of achieving a strategic goal.",
    text2:
      "These institutes equip students with the knowledge and skills needed, to function in a particular job.",
    text3:
      "In short, these Institutes make students ready for the industry.Software training institutes aka as IT training institutes are focused on developing the skill set required for a specific job in the IT industry",
  };
  return (
    <>
      <section
        id="about"
        className="flex relative flex-col md:flex-row-reverse md:mt-28 "
      >
        <div className=" md:w-1/2 md:h-[500px] md:flex-col  block  md:self-center md:justify-around px-3 ">
          <h2 className="w-24 hover:w-full hover:transition-all  border-b-4 border-red-800 text-black text-4xl ">
            {data.head}
          </h2>

          <h6 className="md:my-10 font-medium text-right">{data.text1}</h6>
          <h6 className="text-right font-medium">
            <span className="font-medium">{data.text2}</span>
            {data.text3}
          </h6>
          <div className="flex-col md:flex gap-4 justify-center  md:py-3  mt-1 md:mt-3 ">
            <h4 className="font-slide-font text-2xl">Social Media</h4>
            <div className="flex justify-evenly">
              <a href="">
                <FaTwitter className="hover:text-white size-10" />
              </a>
              <a href="">
                <FaFacebook className="hover:text-white size-10" />
              </a>
              <a href="">
                <FaLinkedin className="hover:text-white size-10" />
              </a>
              <a href="">
                <FaInstagram className="hover:text-white size-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full  md:w-1/2 md:h-[700px] mx-1 md:flex md:items-center  md:relative ">
          <img className="rounded-r-full " src={office} alt="noimg" />
        </div>
      </section>
    </>
  );
};

export default About;
