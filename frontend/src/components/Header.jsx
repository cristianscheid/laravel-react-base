import { Link } from "react-router-dom";

import Button from "./ui/Button";

export default function Header({ user, onLogout }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <Link to="/">Home Page</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/change-password">Change Password</Link>
      <span>{user.name}</span>
      <Button onClick={onLogout} label="Logout" />
    </header>
  );
}
