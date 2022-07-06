const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, next) => {
  console.log(req.cookies.jwt);
  const token = req.cookies.jwt;

  // check jwt exis and verified
  if (token) {
    jwt.verify(token, "net ninja secret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "net ninja secret", async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.login = null;
        next();
      } else {
        console.log(decodedToken);
        let login = await User.findById(decodedToken.id);
        res.locals.login = login;
        next();
      }
    });
  } else {
    res.locals.login = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
