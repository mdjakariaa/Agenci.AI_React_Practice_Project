import assets from "../assets/assets.js";

export default function HelpSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 w-full py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
      <h2 className="text-4xl md:text-7xl text-[#394255] dark:text-[#ffffff]">
        How can we help?
      </h2>
      <p className="text-center text-bold text-[18px] md:text-[23px] text-gray-600 pb-5 md:pb-10">
        From strategy to execution, we craft digital solutions that move your{" "}
        <br />
        business forward.
      </p>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-10">
        <div className="dark:bg-[#101727] flex flex-row gap-10 p-8 w-[400px] h-[150px] md:w-[510px] md:h-[150px] overflow-hidden rounded-2xl shadow-amber-50 border-2 border-gray-100 dark:border-1 dark:border-gray-700 shadow-2xs dark:shadow-none">
          <img
            src={assets.ads_icon}
            alt="advertisment"
            className="border-10 border-gray-200 dark:border-[#354052] rounded-full dark:bg-[#101727]"
          />
          <div> 
            <p className="text-xl pb-2">Advertising</p>
            <p>
              We turn bold ideas into powerful digital solutions that connect,
              engage...
            </p>
          </div>
        </div>
        <div className="dark:bg-[#101727] flex flex-row gap-10 p-8 w-[400px] h-[150px] md:w-[510px] md:h-[150px] overflow-hidden rounded-2xl shadow-amber-50 border-2 border-gray-100 dark:border-1 dark:border-gray-700 shadow-2xs dark:shadow-none">
          <img
            src={assets.marketing_icon}
            alt="marketing"
            className="border-10 border-gray-200 dark:border-[#354052] rounded-full dark:bg-[#101727]"
          />
          <div>
            <p className="text-xl pb-2">Content marketing</p>
            <p>We help you execute your plan and deliver results.</p>
          </div>
        </div>
        <div className="dark:bg-[#101727] flex flex-row gap-10 p-8 w-[400px] h-[150px] md:w-[510px] md:h-[150px] overflow-hidden rounded-2xl shadow-amber-50 border-2 border-gray-100 dark:border-1 dark:border-gray-700 shadow-2xs dark:shadow-none">
          <img
            src={assets.content_icon}
            alt="content"
            className="border-10 border-gray-200 dark:border-[#354052] rounded-full dark:bg-[#101727]"
          />
          <div>
            <p className="text-xl pb-2">Content writing</p>
            <p>We help you create a marketing strategy that drives results.</p>
          </div>
        </div>
        <div className="dark:bg-[#101727] flex flex-row gap-10 p-8 w-[400px] h-[150px] md:w-[510px] md:h-[150px] overflow-hidden rounded-2xl shadow-amber-50 border-2 border-gray-100 dark:border-1 dark:border-gray-700 shadow-2xs dark:shadow-none">
          <img
            src={assets.social_icon}
            alt="social media"
            className="border-10 border-gray-200 dark:border-[#354052] rounded-full dark:bg-[#101727]"
          />
          <div>
            <p className="text-xl pb-2">Social media</p>
            <p>
              We help you build a strong social media presence that drives
              engagement and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
