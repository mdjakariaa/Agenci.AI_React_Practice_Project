import assets from "../assets/assets.js";

export default function Work_Section() {
  return (
    <section className="flex flex-col gap-4 md:gap-8 w-full py-8 md:py-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
      <h2 className="text-center pt-4xl text-4xl md:text-6xl text-[#394255] dark:text-[#ffffff]">
        Reach out to us
      </h2>
      <p className="text-center text-[15px] md:text-[23px] text-gray-600 dark:font-bold dark:text-[13px] pb-1 md:pb-5">
        From strategy to execution, we craft digital solutions that move your{" "}
        <br />
        business forward.
      </p>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 w-max mx-auto">
        <div>
          <h3>Your Name</h3>
          <div className="flex items-center mt-2 gap-2 border border-gray-300 dark:border-gray-700 rounded-lg py-4 pl-4 pr-30">
            <img src={assets.person_icon} alt="person icon" />
            <input
              type="text"
              placeholder="Enter your name"
              className="outline-none"
            />
          </div>
        </div>
        <div>
          <h3>Email Address</h3>
          <div className="flex items-center mt-2 gap-2 border border-gray-300 dark:border-gray-700 rounded-lg py-4 pl-4 pr-30">
            <img src={assets.email_icon} alt="email icon" />
            <input
              type="text"
              placeholder="Enter your email"
              className="outline-none"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h3>Message</h3>
          <textarea
            name="Enter your message"
            placeholder="Enter your message"
            id=""
            className="border-2 border-gray-300 rounded-[8px] w-full min-h-50 px-4 pt-2 mt-2"
          ></textarea>
        </div>
        <div className="flex items-center bg-[#5044e4] w-fit gap-2 py-2 px-10 rounded-full">
          <button className="text-white text-[18px]">Submit</button>
          <img src={assets.arrow_icon} alt="arrow icon" className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
