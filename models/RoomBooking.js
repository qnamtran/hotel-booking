/*
  models represent data structures and validation rules

  these schemas are for reference to help with coding the backend.
  ryan to create these with his DB work
*/

import mongoose from "mongoose";

const roomBookingSchema = new mongoose.Schema({
  roomType: String,
  checkInDate: Date,
  checkOutDate: Date,
});

// roomBookingSchema can be replaced with whatever the schema is actually named when created
const RoomBooking = mongoose.model('RoomBooking', roomBookingSchema);

export default RoomBooking;
