import assets from "../assets/assets.js";
import { useState } from "react";

function Header({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <header
        className="flex justify-between items-center fixed
                         w-full py-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40
                         bg-gray-100 dark:bg-[#0d111c]"
      >
        <img src={darkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-[130px] h-[27px] md:w-[167px] md:h-[31px]"/>
        <nav className="hidden md:block">
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
            className="border-2 border-gray-400 rounded-full cursor-pointer p-1.5 w-8 h-8 md:w-10 md:h-10"
          />
          <button className="hidden md:block px-6 py-2 rounded-4xl bg-[#4f43e6] text-white hover:bg-blue-600 transition-colors duration-300">
            <a href="/connect">Connect</a>
          </button>
          <img
            src={darkMode ? assets.menu_icon_dark : assets.menu_icon}
            alt="menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer w-8 h-10"
          />
        </div>
      </header>

      {isOpen && (
        <nav className="md:hidden bg-gray-100 dark:bg-[#0d111c] px-4 py-4 border-t borer-l border-gray-300 dark:border-gray-700 w-[200px] h-screen absolute right-0 shadow-lg">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/Services" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="/Our Work" onClick={() => setIsOpen(false)}>
                Our Work
              </a>
            </li>
            <li>
              <a href="/Contact Us" onClick={() => setIsOpen(false)}>
                Contact Us
              </a>
            </li>
            
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;
