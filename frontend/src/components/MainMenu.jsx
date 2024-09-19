import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { linkTo: "/", label: "Home" },
    { linkTo: "/about", label: "About" },
    { linkTo: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="flex items-center">
      <button
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleMenu}
      >
        <svg className="text-gray-500 dark:text-gray-400" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`absolute top-full m-1 left-0 items-center justify-between ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul
          className={`flex flex-col font-medium p-4 rounded-lg border border-gray-100 bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}
        >
          {menuItems.map(({ linkTo, label }) => (
            <li key={linkTo}>
              <Link
                className="block p-3 rounded text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
                to={linkTo}
                onClick={handleLinkClick}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
