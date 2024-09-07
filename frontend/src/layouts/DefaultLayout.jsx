import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useStateContext } from "../services/contexts/ContextProvider";
import axiosClient from "../services/api/axios-client";
import Header from "../components/Header";

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
      <Header user={user} onLogout={onLogout}></Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
