import assets from "../assets/assets.js";
export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-6 w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
      <div className="flex flex-row items-center gap-2 border-1 border-gray-400 p-2 rounded-4xl">
        <img
          src={assets.group_profile}
          alt="profile"
          className="w-[80px] h-[27px.5]"
        />
        <p className="text-sm">Trusted by 10k+ people</p>
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-5xl md:text-7xl Manrope sans-serif text-[#364153] dark:text-[#ffffff]">
          Turning imagination into reality.
        </h1>
        <h1 className="text-3xl sm:text-5xl md:text-7xl Manrope sans-serif text-[#364153] dark:text-[#ffffff]">
          <span className="text-[#4d68e6]">digital</span> impact.
        </h1>
      </div>
      <div className="text-center text-gray-400 text-[16px] md:text-[20px]">
        <p>Creating meaningful connections and turning big ideas</p>
        <p>into interactive digital experiences.</p>
      </div>
      <img src={assets.hero_img} alt="hero" className="w-6xl"/>
    </section>
  );
}
