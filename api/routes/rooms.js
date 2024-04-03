import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create room
router.post("/", verifyAdmin, createRoom);

// Update room
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// Delete room
router.delete("/find/:id", verifyAdmin, deleteRoom);

// Get particular room
router.get("/:id", getRoom);

// Get all room
router.get("/", getRooms);

export default router;
