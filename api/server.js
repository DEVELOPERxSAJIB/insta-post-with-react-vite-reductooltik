const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const colors = require("colors");
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
const postRouter = require("./routes/postRouter");
const mongoDBConnection = require("./config/configDB");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// init app
const app = express();

// init json data into express (middlewares)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// others middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: `http://localhost:3000`,
    credentials: true
  })
);

// routes
app.use("/api/v2/user", userRouter);
app.use("/api/v2/auth", authRouter);
app.use("/api/v2/post", postRouter);

// environment variable
const PORT = process.env.PORT || 8000;

// server listen
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgBlue.bold);
  mongoDBConnection();
});
