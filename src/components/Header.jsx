import assets from "../assets/assets.js";

function Header({ darkMode, setDarkMode }) {
  return (
    <header
      className="flex justify-between items-center
                       w-full py-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40
                       bg-gray-100 dark:bg-[#0d111c]"
    >
      <img src={darkMode ? assets.logo_dark : assets.logo} alt="Logo" />
      <nav>
        <ul className="flex flex-row gap-6 items-center">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/Services">Services</a>
          </li>
          <li>
            <a href="/Our Work">Our Work</a>
          </li>
          <li>
            <a href="/Contact Us">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3 items-center">
        <img
          src={darkMode ? assets.sun_icon : assets.moon_icon}
          alt="sunmon"
          onClick={() => setDarkMode(!darkMode)}
          className="border-2 border-gray-400 rounded-full cursor-pointer p-1.5"
        />
        <button className="px-6 py-2 rounded-4xl bg-[#4f43e6] text-white hover:bg-blue-600 transition-colors duration-300">
          <a href="/connect">Connect</a>
        </button>
      </div>
    </header>
  );
}

export default Header;
