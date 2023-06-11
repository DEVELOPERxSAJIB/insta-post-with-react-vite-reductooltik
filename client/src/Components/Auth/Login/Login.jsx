import { GrFacebook } from "react-icons/gr";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserByMe, userLogin } from "../../../features/Users/UserAPI";
import { ToastContainer, toast } from "react-toastify";

import Cookie from "js-cookie";
import { useEffect } from "react";


const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cookie = Cookie.get("authToken");
    dispatch(getUserByMe(cookie));
  }, [dispatch]);

  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleLoginForm = (e) => {
    e.preventDefault();
    dispatch(userLogin({ input, navigate }));
  };

  // toast.success('Registration Successfull, Please Login', {
  //   position: "top-center",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  //   });

  return (
    <div className="login-container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="login-wraper">
        <a className="login-logo-link" href="#">
          <img
            className="login-logo"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
        </a>

        <form onSubmit={handleLoginForm} className="login-form">
          <input
            type="text"
            className="login-input"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder="Phone number, username or email"
          />
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            className="login-input"
            placeholder="Password"
          />
          <button type="submit" className="login-submit">
            Log In
          </button>
        </form>

        <div className="divider">OR</div>

        <a className="login-with-fb" href="#">
          {" "}
          <GrFacebook /> Login with Facebook{" "}
        </a>
        <Link className="forgot-password" to="/forgot-password">
          Forgot password ?{" "}
        </Link>
      </div>
      <div className="signup-wraper">
        <span className="signup-text">
          Dont have an account?{" "}
          <Link to="/registration" className="sign-up-link">
            Sign up
          </Link>
        </span>
      </div>
      <div className="get-app">
        <span className="app-text">Get the app.</span>
        <div className="app-logo">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            alt=""
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
