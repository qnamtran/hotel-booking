/*
routes define the endpoint or URLS that clients use to
interact with the server
*/

const express = require('express');
const router = express.Router();
const RoomBooking = require('../models/RoomBooking');

// USER: Create a new room booking
router.post('/', async (req, res) => {
// Can add data validation here using express-validator
  try {
    const newBooking = new RoomBooking(req.body);
    const savedBooking = await newBooking.save();
    res.json(savedBooking);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

// USER: Get all room bookings
router.get('/', async (req, res) => {
  try {
    // Will add more specific error messages eventually
    const bookings = await RoomBooking.find();
    res.json(bookings);
  } catch (error) {

    res.status(500).json({ error: error.message });
  }
});

// Update a room booking by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBooking = await RoomBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBooking);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

// Delete a room booking by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBooking = await RoomBooking.findByIdAndDelete(req.params.id);
    res.json(deletedBooking);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
