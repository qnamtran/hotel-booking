import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "..\controllers\User.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"; // this is in quangs code

const router = express.Router();

// Update user
router.put("/:id", verifyUser, updateUser);

// Delete user
router.delete("/:id", verifyUser, deleteUser);

// Get user
router.get("/:id", verifyUser, getUser);

// Get all users
router.get("/", verifyAdmin, getUsers);

export default router;