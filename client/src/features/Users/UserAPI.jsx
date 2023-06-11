import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";

// create a new user
export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ input, setInput, navigate }) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v2/auth/register`,
        input,
        {
          withCredentials: true
        }
      );
      setInput({
        name: "",
        email: "",
        username: "",
        password: ""
      });
      navigate("/login");

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);

// get user data from me route
export const getUserByMe = createAsyncThunk(
  "user/getUserByMe",
  async (token) => {
    try {
      const response = await axios.get(`http://localhost:5050/api/v2/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      return response.data;
    } catch (error) {
      console.log(error.response.message.error);
    }
  }
);

// login user account
export const userLogin = createAsyncThunk(
  "user/userLogin",
  async ({ input, navigate }) => {
    const response = await axios
      .post(`http://localhost:5050/api/v2/auth/login`, input, {
        withCredentials: true
      })
      .then((res) => {
        return res.data;
      });
    navigate("/");
  }
);

// logout user account
export const userLogout = createAsyncThunk("user/userLogout", async () => {
  try {
    await axios.get(`http://localhost:5050/api/v2/auth/logout`, {
      withCredentials: true
    });
    return false;
  } catch (error) {
    console.log(error.message);
  }
});
