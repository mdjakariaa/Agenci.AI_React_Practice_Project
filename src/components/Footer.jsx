import assets from "../assets/assets.js";

export default function Header({darkMode}) {
  return (
    <section className="w-full py-6 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 bg-[#f9fafc] dark:bg-[#101727]">
      <div className="flex flex-col md:flex-row justify-between border-b-1 border-gray-300 pt-6">
        <div className="flex flex-col gap-y-4">
          <img
            src={darkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-[130px] h-[27px] md:w-[167px] md:h-[31px]"
          />
          <p className="text-[#868d9d]">
            From strategy to execution, we craft digital solutions that move
            your <br /> business forward.
          </p>
          <div className="flex gap-6 items-center pb-6">
            <p className="text-[#868d9d]">Home</p>
            <p className="text-[#868d9d]">Services</p>
            <p className="text-[#868d9d]">Our Works</p>
            <p className="text-[#868d9d]">Contact Us</p>
          </div>
        </div>
        <div>
          <h3 className="text-[#868d9d] text-[18px] pb-3">
            Subscribe to our newsletter
          </h3>
          <p className="text-[#868d9d]">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-4 py-4">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="outline-none border-1 border-gray-300 pl-4 pr-16 rounded-[5px]"
            />
            <button className="bg-[#5044e4] text-white py-2 px-6 text-[18px] rounded-[5px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between pt-5">
        <p className="text-gray-500">Copyright 2025 © GreatStack - All Right Reserved.</p>
        <div className="flex gap-6">
          <img src={assets.instagram_icon} alt="instagram icon" />
          <img src={assets.linkedin_icon} alt="linkedin icon" />
          <img src={assets.twitter_icon} alt="twitter icon" />
          <img src={assets.facebook_icon} alt="facebook icon" />
        </div>
      </div>
    </section>
  );
}
