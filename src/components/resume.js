import file from "./asserts/cv.png";

const Resume = () => {
  return (
    <>
      <section
        id="resume"
        className="flex flex-col md:flex-row w-full justify-evenly items-center py-2 my-40 md:h-1/3  "
      >
        <div className="text-center p-3 py-3 flex items-center justify-center flex-col w-1/2 ">
          <h1 className=" text-black text-4xl  text-center mb-5 border-b-4 border-red-800 w-32 hover:w-full hover:transition-all ">
            Resume
          </h1>

          <p className="text-2xl capitalize py-4">
            <a href="#">
              you can get the resume Models here...
              <br />
              <button className="btn">Download</button>
            </a>
          </p>
        </div>
        <div className=" flex flex-col w-1/2 mr-3 justify-center items-center">
          <img
            className="rounded-2xl md:rounded-xl size-64 md:size-96"
            src={file}
            alt="no img"
          />
        </div>
      </section>
    </>
  );
};
export default Resume;
