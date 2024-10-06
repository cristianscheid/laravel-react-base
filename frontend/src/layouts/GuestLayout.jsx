import { Navigate, Outlet } from "react-router-dom";

import { useStateContext } from "../services/contexts/ContextProvider";

export default function GuestLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
}
