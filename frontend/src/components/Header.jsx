import { Link } from "react-router-dom";

export default function Header({ user, onLogout }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
        padding: "10px"
      }}
    >
      <Link to="/home">
        <span>Home Page</span>
      </Link>
      <span>{user.name}</span>
      <Link to="/profile">My Profile</Link>
      <button onClick={onLogout}>Logout</button>
    </header>
  );
}
