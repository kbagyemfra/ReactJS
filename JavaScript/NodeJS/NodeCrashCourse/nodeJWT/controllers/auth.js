const User = require("../models/User");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  // console.log(err);
  console.log(`${err.message}\n\n${err.code}`);
  let errors = { email: "", password: "" };

  // incorrect email error
  if (err.message === "incorrect Email") {
    errors.email = "this email is not registered";
    return errors;
  }

  // incorrect password error
  if (err.message === "incorrect password") {
    errors.email = "this password is incorrect";
    return errors;
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 1 * 12 * 60 * 60; // 2 day => 24 hours => 60 min => 60 seconds

// Fxn to create token
const createToken = (id) => {
  return jwt.sign({ id }, "net ninja secret", {
    expiresIn: maxAge,
  });
};

// controller action
const getSignUp = (req, res) => {
  res.render("signup");
};

const getLogin = (req, res) => {
  res.render("login");
};

const postSignUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    // create a user in the database
    const user = await User.create({ email, password });

    // create a token
    const token = createToken(user._id);

    // add the token to a cookie in the browser
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 }); // maxAge*1000 turns to miliseconds
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const login = await User.login(email, password);

    // create a token
    const token = createToken(login._id);

    // add the token to a cookie in the browser
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 }); // maxAge*1000 turns to miliseconds
    res.status(200).json({ login });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const users = await User.deleteMany({}); // delete all the tutorials from DB

    res.status(200).json({ message: "All data is deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getLogout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 }); // expires in 1 milisecond
  res.redirect("/");
};

module.exports = {
  postLogin,
  postSignUp,
  getLogin,
  getSignUp,
  deleteAllUsers,
  getLogout,
};
