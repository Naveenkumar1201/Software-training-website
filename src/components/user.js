import React, { useEffect, useState } from "react";

const User = () => {
  //  taking value of loginform validation
  const initialvalues = { username: "", mail: "", password: "" };
  const [formvalues, setFormvalues] = useState(initialvalues);
  const [formerrors, setFormerrors] = useState({});
  const [issubmit, setIssubmit] = useState(false);

  const handlechange = (e) => {
    //  destructure the form values and names
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
    console.log(e.target);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormerrors(validate(formvalues));
    setIssubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log(formvalues);
    }
  }, [formerrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const char = /^[A-Za-z]+$/;

    if (!values.username) {
      errors.username = "Username is required";
    } else if (!char.test(values.username)) {
      errors.username = "enter alphabatical characters only";
    }
    if (!values.mail) {
      errors.mail = "mail is required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "enter valid mail id";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "password should be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "passwords should be less than 10 characters";
    }
    return errors;
  };

  //register form validation
  const reg_initialvalues = {
    firstname: "",
    lastname: "",
    mobile: "",
    mail: "",
    gender: "",
    password: "",
    password2: "",
  };
  const [reg_formvalues, setReg_formvalues] = useState(reg_initialvalues);
  const [reg_formerrors, setReg_formerrors] = useState({});
  const [reg_issubmit, setReg_issubmit] = useState(false);

  const reg_handlechange = (e) => {
    // destructure the form values and names
    const { name, value } = e.target;
    setReg_formvalues({ ...reg_formvalues, [name]: value });
    console.log(e.target);
  };

  const reg_handlesubmit = (e) => {
    e.preventDefault();
    setReg_formerrors(reg_validate(reg_formvalues));
    setReg_issubmit(true);
  };

  useEffect(() => {
    if (Object.keys(reg_formerrors).length === 0 && reg_issubmit) {
      console.log(reg_formvalues);
    }
  }, [reg_formerrors]);

  const reg_validate = (values) => {
    const errors = {};
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const char = /^[A-Za-z]+$/;

    if (!values.firstname) {
      errors.firstname = "Name is required";
    } else if (!char.test(values.firstname)) {
      errors.firstname = "enter alphabatical characters only";
    }
    if (!values.lastname) {
      errors.lastname = "Name is required";
    } else if (!char.test(values.lastname)) {
      errors.lastname = "enter alphabatical characters only";
    }
    if (!values.mobile) {
      errors.mobile = "mobile number is required ";
    } else if (values.mobile === isNaN) {
      errors.mobile = "should be a number";
    } else if (!values.mobile.length === 10) {
      errors.mobile = "number should be in 10";
    }
    if (!values.mail) {
      errors.mail = "mail is required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "enter valid mail id";
    }
    if (values.gender == null) {
      errors.gender = "choose gender required";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "password should be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "passwords should be less than 10 characters";
    }
    if (!values.password2) {
      errors.password2 = "password is required";
    } else if (values.password2 !== values.password) {
      errors.password2 = "enter the same password ";
    }

    return errors;
  };

  //  this is a click toggle for a login and register hidden content
  const [togglemenu1, setTogglemenu1] = useState(false);
  const [togglemenu2, setTogglemenu2] = useState(false);

  return (
    <>
      <section className="flex flex-wrap flex-col justify-center items-center md:flex-row md:justify-center md:items-center bg-purple-200 min-h-96 md:min-h-16 ">
        {/* login form */}
        <div
          className="w-full mt-[-300px] md:mt-2 md:w-1/2 flex-col justify-center items-center
        "
        >
          <h1
            onClick={() => setTogglemenu1(!togglemenu1)}
            className="font-slide-font md:flex md:justify-center md:items-center text-3xl text-center md:text-4xl font-bold text-black p-5 w-full cursor-pointer "
          >
            Login
          </h1>
          {/* this for sign in pop up message if the validation is correct */}

          {/* this is a click toggle for a login hidden content */}
          {togglemenu1 && (
            <form
              className="mt-3 md:mt-4 p-2 flex justify-center items-center bg-white "
              onSubmit={handlesubmit}
            >
              <div className="flex flex-col justify-center items-center w-full bg-lime-200">
                <div className="flex flex-col md:flex-row justify-evenly items-center relative mt-2 p-2  ">
                  <label
                    className="text-lg text-black capitalize p-1 mt-[-20px] md:mr-3 font-semibold"
                    htmlFor="name"
                  >
                    Username:
                  </label>
                  <div className=" flex flex-col justify-between items-start w-full md:h-16 md:ml-2 ">
                    <input
                      className="w-64 md:w-full h-7 md:h-9"
                      type="text"
                      placeholder="username"
                      name="username"
                      value={formvalues.username}
                      onChange={handlechange}
                    />
                    <p className=" text-sm md:text-lg ">
                      {formerrors.username}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly items-center relative mt-2 p-2 ">
                  <label
                    className="text-lg text-black capitalize p-1 mt-[-20px] md:mr-3 font-semibold "
                    htmlFor="name"
                  >
                    Mail:
                  </label>
                  <div className=" flex flex-col justify-between items-start w-full md:h-16 md:mt-2 ">
                    <input
                      className="w-72 md:w-full h-7 md:h-9"
                      type="email"
                      placeholder="mail"
                      name="mail"
                      value={formvalues.mail}
                      onChange={handlechange}
                    />
                    <p className=" text-sm md:text-lg ">{formerrors.mail}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly items-center relative mt-2 p-2 ">
                  <label
                    className="text-lg text-black capitalize p-1 mt-[-20px] md:mr-3 font-semibold "
                    htmlFor="name"
                  >
                    password:
                  </label>
                  <div className=" flex flex-col justify-between items-start w-full md:h-16 md:mt-2 ">
                    <input
                      className="w-64 md:w-full h-7 md:h-9"
                      type="password"
                      placeholder="password"
                      name="password"
                      value={formvalues.password}
                      onChange={handlechange}
                    />
                    <p className=" text-sm md:text-lg ">
                      {formerrors.password}
                    </p>
                  </div>
                </div>
                <div className="md:flex relative mt-2">
                  <button className="btn">Login</button>
                </div>
                {Object.keys(formerrors).length === 0 && issubmit ? (
                  <div className="flex justify-center items-center text-xl text-purple-600 font-slide1-font">
                    signin success
                  </div>
                ) : (
                  ""
                )}
              </div>
            </form>
          )}
        </div>
        {/* new register */}
        <div className="w-full md:w-1/2">
          <h1
            onClick={() => {
              setTogglemenu2(!togglemenu2);
            }}
            className="font-slide-font md:flex md:justify-center md:items-center text-3xl text-center md:text-4xl font-bold text-black p-5 w-full cursor-pointer "
          >
            Registration
          </h1>
          {togglemenu2 && (
            <form onSubmit={reg_handlesubmit} className="w-full bg-stone-200">
              <div className="flex flex-col justify-start items-center w-full">
                <div className="flex flex-col md:flex-row justify-end items-center relative mt-2 p-2 w-64 md:w-96 h-1/2 ">
                  <label
                    className="text-lg text-black capitalize p-1 mt-[-20px] md:mr-3 font-semibold w-20"
                    htmlFor="firstname"
                  >
                    firstname:
                  </label>
                  <div className=" flex flex-col justify-between items-center w-72 md:h-16 md:ml-2 ">
                    <input
                      onChange={reg_handlechange}
                      className="w-64 md:w-full h-7 md:h-9"
                      type="text"
                      placeholder="firstname"
                      name="firstname"
                      value={reg_formvalues.firstname}
                    />
                    <p className=" text-sm md:text-lg ">
                      {reg_formerrors.firstname}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-end items-center relative mt-2 p-2 w-64 md:w-96  ">
                  <label
                    className="text-lg text-black capitalize p-1 mt-[-20px] md:mr-3 font-semibold w-20"
                    htmlFor="name"
                  >
                    lastname:
                  </label>
                  <div className=" flex flex-col justify-between items-center w-72 md:h-16 md:ml-2 ">
                    <input
                      onChange={reg_handlechange}
                      className="w-64 md:w-full h-7 md:h-9"
                      type="text"
                      placeholder="lastname"
                      name="lastname"
                      value={reg_formvalues.lastname}
                    />
                    <p className=" text-sm md:text-lg ">
                      {reg_formerrors.lastname}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-end items-center relative mt-2 p-2 w-64 md:w-96  ">
                  <label
                    className="text-lg text-center text-black capitalize md:p-1 md:mt-[-20px] md:mr-3 font-semibold w-20 "
                    htmlFor="name"
                  >
                    mobile:
                  </label>
                  <div className=" flex flex-col justify-between items-center w-72 md:h-16 md:ml-2 ">
                    <input
                      onChange={reg_handlechange}
                      className="w-64 md:w-full h-7 md:h-9"
                      type="number"
                      placeholder="mobile"
                      name="mobile"
                      value={reg_formvalues.mobile}
                    />
                    <p className=" text-sm md:text-lg ">
                      {reg_formerrors.mobile}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-end items-center relative mt-2 p-2 w-64 md:w-96 ">
                  <label
                    className="text-lg text-center text-black capitalize md:p-1 md:mt-[-25px]  font-semibold w-24 "
                    htmlFor="name"
                  >
                    mail:
                  </label>
                  <div className=" flex flex-col justify-between items-center w-72 md:h-16  ">
                    <input
                      onChange={reg_handlechange}
                      className="w-64 md:w-full h-7 md:h-9"
                      type="email"
                      placeholder="mail"
                      name="mail"
                      value={reg_formvalues.mail}
                    />
                    <p className=" text-sm md:text-lg ">
                      {reg_formerrors.mail}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-end items-center relative mt-2 p-2 w-64 md:w-96  ">
                  <label
                    className="text-lg text-black capitalize p-1 mt-[-5px] md:mr-3 font-semibold w-20"
                    htmlFor="name"
                  >
                    gender:
                  </label>
                  <div className=" flex justify-evenly items-center w-72  h-8 ">
                    <div className="flex">
                      <label htmlFor="male">male</label>
                      <input
                        onChange={reg_handlechange}
                        type="radio"
                        placeholder="male"
                        className="size-5"
                        name="gender"
                        value="male"
                      />
                    </div>
                    <div className="flex">
                      <label htmlFor="male">female</label>
                      <input
                        onChange={reg_handlechange}
                        type="radio"
                        placeholder="female"
                        className="size-5"
                        name="gender"
                        value="female"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-end items-center relative mt-2 p-2 w-64 md:w-96 ">
                  <label
                    className="text-lg text-black capitalize p-1 mt-[-20px] md:mr-3 font-semibold w-20"
                    htmlFor="name"
                  >
                    password:
                  </label>
                  <div className=" flex flex-col justify-between items-center w-72 md:h-16 md:ml-2 ">
                    <input
                      onChange={reg_handlechange}
                      className="w-64 md:w-full h-7 md:h-9"
                      type="password"
                      placeholder="password"
                      name="password"
                      value={reg_formvalues.password}
                    />
                    <p className=" text-sm md:text-lg ">
                      {reg_formerrors.password}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-end items-center relative mt-2 p-2 w-64 md:w-96  ">
                  <label
                    className="text-lg text-black capitalize p-1 mt-[-20px] md:mr-3 font-semibold w-20"
                    htmlFor="name"
                  >
                    password-2:
                  </label>
                  <div className=" flex flex-col justify-between items-center w-72 md:h-16 md:ml-2 ">
                    <input
                      onChange={reg_handlechange}
                      className="w-64 md:w-full h-7 md:h-9"
                      type="password"
                      placeholder="password"
                      name="password2"
                      value={reg_formvalues.password2}
                    />
                    <p className=" text-sm md:text-lg ">
                      {reg_formerrors.password2}
                    </p>
                  </div>
                </div>
                <div className=" flex justify-center items-center w-64 md:w-96 ">
                  <button className="btn" type="submit">
                    SUBMIT
                  </button>
                </div>
                {Object.keys(reg_formerrors).length === 0 && reg_issubmit ? (
                  <div className="w-full flex justify-center items-center p-5 text-xl text-red-600 font-google-italic">
                    Successfully Create a Accounts
                  </div>
                ) : (
                  ""
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default User;
