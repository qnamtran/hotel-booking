import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create room
router.post("/", verifyAdmin, createRoom);

// Update room
router.put("/:id", verifyAdmin, updateRoom);

// Delete room
router.delete("/:id", verifyAdmin, deleteRoom);

// Get particular room
router.get("/:id", getRoom);

// Get all room
router.get("/", getRooms);

export default router;
