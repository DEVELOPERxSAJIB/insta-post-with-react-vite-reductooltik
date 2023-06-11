import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RedirectWhenLoggedIn = () => {
  const { loginState } = useSelector((state) => state.user);

  return loginState ?  <Outlet /> : <Navigate to="/login"/>
};

export default RedirectWhenLoggedIn;
