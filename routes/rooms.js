/*
routes define the endpoint or URLS that clients use to
interact with the server
*/

const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// USER: Create a new room
router.post('/', async (req, res) => {
// Can add data validation here using express-validator
  try {
    const newRoom = new Room(req.body);
    const savedRoom = await newRoom.save();
    res.json(savedRoom);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

// USER: Get all rooms
router.get('/', async (req, res) => {
  try {
    // Will add more specific error messages eventually
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {

    res.status(500).json({ error: error.message });
  }
});

// Get room by ID
router.get('/:id', async (req, res) => {
  try {
    // Will add more specific error messages eventually
    const rooms = await Room.findById(req.params.id);
    res.json(rooms);
  } catch (error) {

    res.status(500).json({ error: error.message });
  }
});

// Update a room by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRoom);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

// Delete a room by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    res.json(deletedRoom);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
