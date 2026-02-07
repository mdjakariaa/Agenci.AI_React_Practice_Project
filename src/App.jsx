import { useState, useEffect } from "react";

function Theme() {
  const [darkMode, setDarkMode] = useState(false);
  // true: default is dark mode, false: default is light mode

  // Add or remove "dark" class from <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="min-h-screen flex items-center justify-center
                    bg-white dark:bg-gray-900
                    text-gray-900 dark:text-white
                    transition-colors duration-300"
    >
      <div
        className="p-8 rounded-lg shadow-lg
                      bg-gray-100 dark:bg-gray-800"
      >
        <h1 className="text-2xl font-bold mb-4">Dark & Light Mode</h1>

        <p className="mb-6">Click the button to change theme.</p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-6 py-2 rounded-md
                     bg-black text-white
                     dark:bg-white dark:text-black
                     transition-all duration-300"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Theme;
