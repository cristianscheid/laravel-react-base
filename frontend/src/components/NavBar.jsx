import { Link } from "react-router-dom";

import MainMenu from "./MainMenu";
import AppLogo from "./ui/AppLogo";
import UserMenu from "./UserMenu";

export default function NavBar({ user, onLogout }) {
  return (
    <nav className="relative bg-gray-900 border-gray-200">
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
