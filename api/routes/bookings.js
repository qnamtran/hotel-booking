import express from "express";
import { createBooking, getBooking, getBookings, getBookingsByUserId } from "../controllers/booking.js";

const router = express.Router();

// Create booking
router.post("/", createBooking);

// Get particular booking
router.get("/:id", getBooking);

// Get all bookings
router.get("/", getBookings);

// Get all bookings by a user
router.get("/user/:userId", getBookingsByUserId);

export default router;
