// imports
const express = require("express");
const users = require("./routes/users");
require("dotenv").config();
const connectDB = require("./data/mongoDB");
const cors = require("cors");

// Variables
const app = express();
const PORT = 2000;
const URI = process.env.MONGO_URI;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// routes
app.use("/api/v1/users", users);

// Listeners
const listen = async () => {
  try {
    await connectDB(URI); // connect DB
    app.listen(PORT, console.log(`Running on PORT ${PORT}.....`));
  } catch (error) {
    console.log(error);
  }
};

listen();
