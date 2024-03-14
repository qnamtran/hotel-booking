import Room from "../models/Room.js";

// Create room
export const createRoom = async (req, res, next) => {
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

// Edit room
export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

// Delete room
export const deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted");
  } catch (err) {
    next(err);
  }
};

// Get room
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

// Get all rooms
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};


export const countByRoomNumber = async (req, res, next) => {
  try {
    const roomId = req.params.id; // Assuming the room ID is passed as a route parameter

    // Find the room by ID
    const room = await Room.findById(roomId);

    if (!room) {
      throw new Error("Room not found");
    }

    const numberOfRoomNumbers = room.roomNumbers.length;

    res.status(200).json({ count: numberOfRoomNumbers });
  } catch (err) {
    next(err);
  }
};

