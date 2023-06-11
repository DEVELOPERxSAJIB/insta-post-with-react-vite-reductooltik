import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RedirectWhenLoggedOut = () => {
  const { loginState } = useSelector((state) => state.user);

  return loginState ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectWhenLoggedOut;
