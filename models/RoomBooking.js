/*
models represent data structures and validation rules
*/

const mongoose = require('mongoose');

const roomBookingSchema = new mongoose.Schema({
  roomType: String,
  checkInDate: Date,
  checkOutDate: Date,
});

// roomBookingSchema can be replaced with whatever the schema is actually named when created
const RoomBooking = mongoose.model('RoomBooking', roomBookingSchema);

module.exports = RoomBooking;
