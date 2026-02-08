import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";


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
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
