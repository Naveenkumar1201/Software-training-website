import React from "react";
import developer from "./asserts/developer.jpg";

export default function Body1() {
  const data = {
    title: "Full-stack Developer's",
    text: "here we can make a trained developers as soon as your compatibility",
  };

  return (
    <>
      <section
        id="home"
        className="flex flex-col md:flex-row w-full justify-around py-20 my-0 md:my-7 "
      >
        <div className="text-center p-3 py-3 items-center justify-center flex flex-col bg-transparent bg-gray-200 ">
          <h1 className=" text-black text-6xl mt-24 ">
            HI <br />
            <span className="font-slide-font text-red-700 ">{data.title}</span>
          </h1>
          <p className="text-2xl capitalize py-4">{data.text}</p>
        </div>
        <div className=" flex flex-col md:w-full h-1/3 mr-3">
          <img
            className="rounded-tl-full md:rounded-br-3xl"
            src={developer}
            alt="no img"
          />
        </div>
      </section>
    </>
  );
}
