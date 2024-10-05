import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function UserMenu({ user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { linkTo: "/profile", label: "Profile" },
    { linkTo: "/change-password", label: "Change Password" },
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
      {/* User avatar button */}
      <button
        className="flex text-sm bg-gray-500 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        onClick={toggleMenu}
      >
        <svg className="size-8" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>

      {/* Dropdown menu container */}
      <div
        className={`absolute top-full right-0 z-50 m-1 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* User info */}
        <div className="p-4">
          <span className="block text-sm text-gray-900 dark:text-white">
            {user.name}
          </span>
          <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </span>
        </div>

        {/* Menu items */}
        <ul className="py-2">
          {menuItems.map(({ linkTo, label }) => (
            <li key={linkTo}>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                to={linkTo}
                onClick={handleLinkClick}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Logout button */}
          <li>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-left"
              onClick={onLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
