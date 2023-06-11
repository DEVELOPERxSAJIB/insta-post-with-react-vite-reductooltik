import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Auth/Login/Login";
import Registration from "../Components/Auth/Registration/Registration";
import Profile from "../Components/Profile/Profile";
import RedirectWhenLoggedOut from "../middlewares/redirectWhenLoggedOut";
import RedirectWhenLoggedIn from "../middlewares/redirectWhenLoggedIn";

const publicRouter = createBrowserRouter([
  {
    element: <RedirectWhenLoggedIn />,
    children: [
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    element: <RedirectWhenLoggedOut />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/logout",
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      }
    ]
  }
]);

export default publicRouter;
