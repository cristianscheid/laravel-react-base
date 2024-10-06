import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import axiosClient from "../services/api/axios-client";
import { useStateContext } from "../services/contexts/ContextProvider";

export default function DefaultLayout() {
  const { user, token, setUser, setToken } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div>
      <NavBar user={user} onLogout={onLogout} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
