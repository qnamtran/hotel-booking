/*
routes define the endpoint or URLS that clients use to
interact with the server
*/

const express = require('express');
const router = express.Router();
const RoomBooking = require('../models/RoomBooking');



/* Check for room booking
  this route checks room availability based on provided start
  and end dates.
  the response includes a list of available rooms.
*/
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



/* Get all room bookings
  this route is used to retrieve a list of all room bookings
  can be used by admins to manage bookings, or by users to display available
  rooms
*/
router.get('/', async (req, res) => {
  try {
    // Will add more specific error messages eventually
    const bookings = await RoomBooking.find();
    res.json(bookings);
  } catch (error) {

    res.status(500).json({ error: error.message });
  }
});



/* Update a room booking by ID
  this route is used to update an existing room booking based on its ID.
  can be used by a user who wants to modify a reservation, such as changing
  the dates or room number
*/
router.put('/:id', async (req, res) => {
  try {
    const updatedBooking = await RoomBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBooking);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});



/* Delete a room booking by ID
  This route is used to delete an existing room booking based on its ID. 
  It might be used on the frontend if a user decides to cancel their reservation.
*/
router.delete('/:id', async (req, res) => {
  try {
    const deletedBooking = await RoomBooking.findByIdAndDelete(req.params.id);
    res.json(deletedBooking);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});


/* Create a room booking
  This route is used for creating a room booking.
  It creates a room booking based on the data provided in the request
  The response includes details of the newly created room
*/
router.get('/availability', async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const availableRooms = await Room.find({
      _id: { $nin: await getBookedRoomIds(startDate, endDate) }
    });

    res.json({ availableRooms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
