import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Headers = () => {
  const data = {
    title: "Creative Developer's",
    barlist: ["Home", "About", "Projects", "Contact", "Resume"],
  };

  const [togglemenu, setTogglemenu] = useState(false);

  return (
    <>
      <header className="flex mt-2 justify-between px-3 py-2 bg-gray-200">
        <h3 className="text-lime-900 font-serif font-bold cursor-pointer ">
          <a href="">{data.title}</a>
        </h3>
        <nav className="hidden md:block text-black">
          <ul className="flex justify-evenly">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setTogglemenu(!togglemenu)}
          className="block md:hidden"
        >
          <Bars3Icon className="text-black h-7 " />
        </button>

        {/* this toggle menu for if i click the bar icon in a mobile view it will openup the hidden menu */}
        {togglemenu && (
          <nav className="block md:hidden mobmenu">
            <ul
              onClick={() => setTogglemenu(!togglemenu)}
              className="flex flex-col h-full text-white bg-cyan-600 "
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Headers;
