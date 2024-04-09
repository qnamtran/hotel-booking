import express from "express";
import { createBooking, getBooking, getBookings } from "../controllers/booking.js";

const router = express.Router();

// Create booking
router.post("/", createBooking);

// Get particular booking
router.get("/:id", getBooking);

// Get all bookings
router.get("/", getBookings);

export default router;
