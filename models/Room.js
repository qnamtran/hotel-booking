/*
models represent data structures and validation rules
*/

const mongoose = require('mongoose');

// enum to map room type to string
const RoomType = {
    DoubleQueen: "Double queen",
    SingleKing: "Single king",
}
const roomSchema = new mongoose.Schema({
  roomType: RoomType,
  roomNumber: Int,
  floorNumber: Int,
  isClean: Boolean,
  isRollinAccessible: Boolean,
  isHearingAccessible: Boolean,
});

// roomSchema can be replaced with whatever the schema is actually named when created
const Rooms = mongoose.model('Rooms', roomSchema);

module.exports = Rooms;
