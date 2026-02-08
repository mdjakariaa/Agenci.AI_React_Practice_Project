import assets from "../assets/assets.js";

export default function Work_Section() {
    return (
      <section className="flex flex-col gap-8 w-full py-8 md:py-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
        <h2 className="text-center pt-4xl text-4xl md:text-7xl text-[#394255] dark:text-[#ffffff]">
          Our latest work
        </h2>
        <p className="text-center text-bold text-[15px] md:text-[23px] text-gray-600 dark:font-bold pb-1 md:pb-10">
          From strategy to execution, we craft digital solutions that move{" "}
          <br />
          your business forward.
        </p>
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-6 w-max mx-auto justify-items-center">
          <div>
            <img
              src={assets.work_mobile_app}
              alt="mobile app"
              className="w-[450px] sm:w-[325px] sm:h-[220px] md:w-[325px] md:h-[220px]"
            />
            <h2 className="text-[20px] py-2">Mobile app marketing</h2>
            <p className="text-gray-500 dark:font-bold">
              We turn bold ideas into powerful digital <br /> solutions that
              connect, engage...
            </p>
          </div>
          <div>
            <img
              src={assets.work_dashboard_management}
              alt="dashboard management"
              className="w-[450px] sm:w-[325px] sm:h-[220px] md:w-[325px] md:h-[220px]"
            />
            <h2 className="text-[20px] py-2">Dashboard management</h2>
            <p className="text-gray-500 dark:font-bold">
              We help you execute your plan and <br /> deliver results.
            </p>
          </div>
          <div>
            <img
              src={assets.work_fitness_app}
              alt="fitness app"
              className="w-[450px] sm:w-[325px] sm:h-[220px] md:w-[325px] md:h-[220px]"
            />
            <h2 className="text-[20px] py-2">Fitness app promotion</h2>
            <p className="text-gray-500 dark:font-bold">
              We help you create a marketing strategy <br /> that drives
              results.
            </p>
          </div>
        </div>
      </section>
    );
} 


