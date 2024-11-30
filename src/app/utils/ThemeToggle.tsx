'use client';

import { useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.style.setProperty(
      '--background-color',
      darkMode ? '#f8f8f8' : '#181818'
    );
    document.documentElement.style.setProperty(
      '--text-color',
      darkMode ? '#181818' : 'rgba(255, 255, 255, 0.87)'
    );
  };

  return (
    <button onClick={toggleTheme} className="px-4 py-2 bg-blue-500 text-white rounded">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;