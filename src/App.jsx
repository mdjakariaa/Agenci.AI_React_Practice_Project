import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/Hero_Section.jsx";
import CompanySection from "./components/Company_Section.jsx";
import HelpSection from "./components/Help.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="min-h-screen bg-white dark:bg-[#000000]
                    text-gray-900 dark:text-gray-100
                    transition-colors duration-300"
    >
      <div>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <main>
        <HeroSection />
        <CompanySection />
        <HelpSection />
      </main>
    </div>
  );
}

export default App;
