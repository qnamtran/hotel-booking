/*
models represent data structures and validation rules
*/

const mongoose = require('mongoose');


// Enum to map room type to string
const RoomType = {
  DoubleQueen: "Double queen",
  SingleKing: "Single king",
};

const roomSchema = new mongoose.Schema({
roomType: {
  type: String,
  enum: Object.values(RoomType),
  required: true,
},
roomNumber: {
  type: Number,
  required: true,
},
floorNumber: {
  type: Number,
  required: true,
},
isClean: {
  type: Boolean,
  default: false,
},
isRollinAccessible: {
  type: Boolean,
  default: false,
},
isHearingAccessible: {
  type: Boolean,
  default: false,
},
});

// roomSchema can be replaced with whatever the schema is actually named when created
const Rooms = mongoose.model('Rooms', roomSchema);

module.exports = Rooms;
