import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
    maxPeople: {
      type: Number,
      require: true,
    },
    numberOfBed: {
      type: Number,
      require: true,
    },
    costPerNight: {
      type: Number,
      require: true,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
