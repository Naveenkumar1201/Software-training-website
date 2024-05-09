import React from "react";
import proj1 from "./asserts/food.jpg";
import proj2 from "./asserts/galary.jpg";
import proj3 from "./asserts/commerce.jpg";

const Projects = () => {
  const data = {
    projects: [
      {
        image: proj2,
        description: "",
        title: "Galary Portfolio",
      },
      {
        image: proj1,
        description: "",
        title: "Resutaurant",
      },
      {
        image: proj3,
        description: "",
        title: "E-commerce",
      },
    ],
  };
  return (
    <>
      <section
        id="projects"
        className=" flex-col md:flex my-20  py-1 bg-neutral-500 h-auto"
      >
        <div className=" text-yellow-400 text-center justify-center items-center flex p-2 md:p-5">
          <h1 className=" text-white text-4xl hover:w-full hover:transition-all  border-b-4 border-red-800">
            Projects
          </h1>
        </div>
        <div className="w-full h-full grid grid-rows-7 grid-cols-7 justify-center md:flex items-center md:justify-evenly md:items-center gap-7 my-2 ">
          {/* sub divisions */}
          <div className="flex justify-between items-center md:flex-col row-start-2 col-start-2 col-span-5 row-span-2 md:col-span-5  w-full md:w-1/3 ">
            <div className="relative w-full flex justify-self-start md:justify-center items-center ">
              <img
                className="ring-4 ring-offset-8 ring-red-600  rounded-xl size-24 md:size-72 cursor-pointer 
                "
                src={proj2}
                alt="noimg"
              />
              <div className="absolute  md:top-[-4px] md:left-[70px] bg-slate-200 size-24 md:h-[300px] md:w-80 opacity-0 hover:opacity-100 duration-500 rounded-2xl items-center flex ">
                <p className="text-center font-thin text-sm py-5  ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eius, possimus.
                </p>
              </div>
            </div>
            <div className=" col-start-5 col-span-3 row-span-2 row-start-2 md:block md:my-3 md:w-64 flex justify-self-end items-center w-1/2 ">
              <h3 className=" text-lg font-slide1-font first-letter:text-2xl md:first-letter:text-4xl first-letter:text-sky-500 first-line:text-orange-500">
                Galary Portfolio
              </h3>
            </div>
          </div>

          <div className="flex justify-between items-center flex-row-reverse md:flex-col col-start-2 row-start-4 col-span-5 row-span-2 w-full md:w-1/3  ">
            <div className="relative w-full flex justify-center ">
              <img
                className="ring-8 ring-offset-8 ring-black rounded-full size-20 md:size-72 cursor-pointer"
                src={proj1}
                alt="noimg"
              />
              <div className="absolute top-[-22px] md:left-[82px] md:bottom-[-15px] bg-slate-200  md:h-80 md:w-80 opacity-0 hover:opacity-100 duration-500 rounded-2xl flex justify-center items-center size-32">
                <p className="text-center font-thin py-5 text-sm md:text-lg ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit et beatae doloribus deserunt, veniam quisquam?
                </p>
              </div>
            </div>
            <div className="col-start-2 col-span-4 row-span-2 row-start-2 md:block md:my-3 md:w-64 flex justify-start items-center mr-5 w-full">
              <h3 className=" text-xl text-center font-slide1-font first-letter:text-2xl md:first-letter:text-4xl first-letter:text-sky-200 first-line:text-black">
                Restaurant
              </h3>
            </div>
          </div>
          <div className="flex justify-between items-center md:flex-col col-start-2 row-start-6 col-span-5 row-span-2 md:w-1/3 ">
            <div className="relative w-full flex justify-self-start md:justify-center items-center ">
              <img
                className="ring-4 ring-offset-8 ring-red-600  rounded-xl size-24 md:size-72 cursor-pointer 
                "
                src={proj3}
                alt="noimg"
              />
              <div className="absolute  md:top-[-4px] md:left-[70px] bg-slate-200 size-24 md:h-[300px] md:w-80 opacity-0 hover:opacity-100 duration-500 rounded-2xl items-center flex ">
                <p className="text-center font-thin text-sm py-5  ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eius, possimus.
                </p>
              </div>
            </div>
            <div className=" col-start-6 col-span-3 row-span-2 row-start-1 md:block md:my-3 md:w-64 flex justify-center items-center w-full ml-2 ">
              <h3 className=" text-lg text-right md:text-right font-slide1-font first-letter:text-2xl md:first-letter:text-4xl first-letter:text-sky-500 first-line:text-black">
                E-commerce
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
