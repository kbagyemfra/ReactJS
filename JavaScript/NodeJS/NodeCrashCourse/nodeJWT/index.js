const express = require("express");
const users = require("./routes/users");
const connectDB = require("./db/connect");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/auth");
require("dotenv").config();

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
const URI = process.env.MONGO_URI;
const port = 4000;

// routes
app.get("*", checkUser);
app.get("/", requireAuth, (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.use(users);

const start = async () => {
  try {
    await connectDB(URI);
    app.listen(port, console.log(`server is listening on Port ${port}....`));
  } catch (err) {
    console.log(`Cannot connect to database!`, err);
  }
};

start();
