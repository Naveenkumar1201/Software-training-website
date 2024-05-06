const Contact = () => {
  const data = {
    company_name: "",
    ph: "7010089427",
    mail: "navinesh@gmail.com",
    address: "8/684 gandhinagar, sathyamangalam , Erode , 638406",
  };
  return (
    <>
      <section
        id="contact"
        className="flex flex-col w-full md:flex-row  md:justify-between md:items-center md:py-2 md:my-10 bg-purple-900-200 bg-slate-300 h-1/3 md:h-1/3"
      >
        <div className="w-full md:w-1/2 ">
          <h1 className="text-4xl text-white text-left py-3 my-3 md:my-2 hover:w-full hover:transition-all  border-b-4 border-red-800 w-32">
            Contact
          </h1>
          <div className="flex-col text-center py-3 md:mt-10 md:grid md:text-left items-stretch md:justify-start  w-full  ">
            <address className=" flex">
              <label className="font-medium" htmlFor="">
                Address:
              </label>
              <h3>{data.address}</h3>
            </address>
            <h4>
              <label className="font-medium" htmlFor="mail">
                Mail-id:
              </label>
              <small>{data.mail}</small>
            </h4>
            <h3>
              <label className="font-medium" htmlFor="">
                Phone no:
              </label>
              {data.ph}
            </h3>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center md:flex md:justify-end ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.695108194728!2d77.23413503392408!3d11.503439795902432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba920d7acaa3fc1%3A0x280672077bfe9e9b!2sSathyamangalam%2C%20Tamil%20Nadu%20638402!5e0!3m2!1sen!2sin!4v1714647226753!5m2!1sen!2sin"
            width="250"
            height="200"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default Contact;
