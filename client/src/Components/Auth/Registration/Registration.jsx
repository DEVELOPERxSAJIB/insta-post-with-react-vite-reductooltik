import "./Register.scss";
import { GrFacebook } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import AuthFooter from "../../AuthFooter/AuthFooter";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { createUser } from "../../../features/Users/UserAPI";


const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [input, setInput] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
  });

  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    dispatch(createUser({input, setInput, navigate}))
  };

  return (
    <div className="login-container">
      <div className="login-wraper">
        <a className="login-logo-link" href="#">
          <img
            className="login-logo"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
        </a>
        <span className="reg-text">
          Sign up to see photos and videos from your friends.
        </span>
        <a className="login-with-fb-register" href="#">
          {" "}
          <GrFacebook /> Login with Facebook{" "}
        </a>
        <div className="divider">OR</div>
        <form onSubmit={handleRegisterForm} className="login-form">
          <input
            name="email"
            type="text"
            value={input.email}
            onChange={handleInput}
            className="login-input"
            placeholder="Mobile number or Email"
          />
          <input
            name="name"
            type="text"
            value={input.name}
            onChange={handleInput}
            className="login-input"
            placeholder="Full Name"
          />
          <input
            name="username"
            type="text"
            value={input.username}
            onChange={handleInput}
            className="login-input"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            value={input.password}
            onChange={handleInput}
            className="login-input"
            placeholder="Password"
          />

          <p className="reg-form-text">
            People who use our service may have uploaded your contact
            information to Instagram. <a href="#">Learn More</a>
          </p>
          <p className="reg-form-text">
            By signing up, you agree to our <a href="#">Terms</a> ,{" "}
            <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a> .
          </p>

          <button type="submit" className="login-submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className="signup-wraper">
        <span className="signup-text">
          Have an account?{" "}
          <Link to="/login" className="sign-up-link">
            Log In
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
      <AuthFooter />
    </div>
  );
};

export default Register;
