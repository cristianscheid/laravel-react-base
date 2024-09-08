import { useState } from "react";
import { Link } from "react-router-dom";
import UserMenuButtonIcon from "./ui/UserMenuButtonIcon";

export default function UserMenu({ user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center">
      <button
        className="flex text-sm bg-gray-500 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        onClick={toggleMenu}
      >
        <UserMenuButtonIcon className="text-gray-500 dark:text-gray-400" />
      </button>
      <div
        className={`absolute top-full right-0 z-50 m-1 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4">
          <span className="block text-sm text-gray-900 dark:text-white">
            {user.name}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </span>
        </div>
        <ul className="py-2">
          <li>
            <Link
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              to="/profile"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              to="/change-password"
            >
              Change Password
            </Link>
          </li>
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
