import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AppLogo from "./ui/AppLogo";
import MainMenu from "./MainMenu";
import UserMenu from "./UserMenu";

export default function NavBar({ user, onLogout }) {
  return (
    <nav className="relative bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex items-center justify-between p-4">
        <MainMenu />
        <Link to="/">
          <AppLogo />
        </Link>
        <UserMenu user={user} onLogout={onLogout} />
      </div>
    </nav>
  );
}
