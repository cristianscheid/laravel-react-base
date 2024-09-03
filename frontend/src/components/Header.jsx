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
      <Link to="/home">Home Page</Link>
      <span>{user.name}</span>
      <Link to="/profile">My Profile</Link>
      <Button onClick={onLogout} label="Logout" />
    </header>
  );
}
