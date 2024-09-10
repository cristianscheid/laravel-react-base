import { useState, useEffect, useRef } from "react";

import MainMenuItem from "./ui/MainMenuItem";
import MainMenuButtonIcon from "./ui/MainMenuButtonIcon";

export default function MainMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center">
      <button
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleMenu}
      >
        <MainMenuButtonIcon className="text-gray-500 dark:text-gray-400" />
      </button>
      <div
        className={`absolute top-full left-0 items-center justify-between ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul
          className={`h-screen h-[calc(100vh-72px)] flex flex-col font-medium p-4 border border-gray-100 bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}
        >
          <MainMenuItem linkTo="/" label="Home" />
          <MainMenuItem linkTo="/" label="About" />
          <MainMenuItem linkTo="/" label="Contact" />
        </ul>
      </div>
    </div>
  );
}
