import { useEffect, useRef, useState } from "react";
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
      {/* Menu toggle button */}
      <button
        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-400 rounded-lg focus:outline-none focus:ring-2 ring-gray-200 hover:bg-gray-700 focus:ring-gray-600"
        onClick={toggleMenu}
      >
        <svg className="text-gray-400" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* Menu container */}
      <div
        className={`absolute top-full left-0 items-center justify-between ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Menu items */}
        <ul className="flex flex-col h-[calc(100vh-72px)] p-4 text-lg font-medium bg-gray-900 border-gray-700">
          {menuItems.map(({ linkTo, label }) => (
            <li key={linkTo}>
              <Link
                className="block p-3 text-white rounded hover:bg-gray-700 hover:text-white"
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
