 const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// GET USERS
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");

    return res.status(200).json({
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE USER
const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      age,
      gender,
      contactNumber,
      email,
      username,
      password,
      address,
      type,
      isActive,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !age ||
      !gender ||
      !contactNumber ||
      !email ||
      !username ||
      !password ||
      !address
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email or username already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      firstName,
      lastName,
      age,
      gender,
      contactNumber,
      email,
      username,
      password: hashedPassword,
      address,
      type: type || "editor",
      isActive: isActive ?? true,
    });

    const users = await User.find({}, "-password");

    return res.status(201).json({
      message: "User created successfully",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    const users = await User.find({}, "-password");

    return res.status(200).json({
      message: "User updated successfully",
      users,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    const users = await User.find({}, "-password");

    return res.status(200).json({
      message: "User deleted successfully",
      users,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.type === "viewer") {
      return res.status(403).json({
        message: "Viewer accounts cannot login",
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        message: "Your account is inactive",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        type: user.type,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Login successful",
      token,
      type: user.type,
      firstName: user.firstName,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};