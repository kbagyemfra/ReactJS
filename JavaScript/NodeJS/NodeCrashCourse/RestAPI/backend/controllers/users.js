const User = require("../models/Users");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createUsers = async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const users = await User.findOneAndDelete({ _id: userID });

    if (!users) {
      return res
        .status(404)
        .json({ msg: `No users found with ID ${userID}....` });
    }
    res
      .status(200)
      .json({ Message: `User with ${userID} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getName = async (req, res) => {
  let { name } = req.body;
  res.status(200).json("Hello");
  console.log(name);
};

module.exports = {
  getAllUsers,
  createUsers,
  deleteUsers,
  getName,
};
