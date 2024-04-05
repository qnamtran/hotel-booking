import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { userId, currentPassword, newPassword } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);
    // if (!user) {
    //   return next(createError(404, "User not found"));
    // }

    // Check if the current password provided matches the stored password
    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isPasswordCorrect) {
      return next(createError(400, "Incorrect current password"));
    }

    // Generate a new hash for the new password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt);

    // Update the user's password
    user.password = hash;
    await user.save();

    // Send a success response
    res.status(200).send("Password is successfully updated");
  } catch (err) {
    next(err);
  }
};
