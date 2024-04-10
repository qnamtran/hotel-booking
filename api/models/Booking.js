import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      require: true,
    },
    roomName: {
      type: String,
      require: true,
    },
    roomNumber: {
      type: Number,
      require: true,
    },
    userId:{
      type: String,
      require:true,
    },
    userName: {
      type: String,
      require: true,
    },
    checkInDate: {
      type: Date,
      require: true,
    },
    checkOutDate: {
      type: Date,
      require: true,
    },
    costPerNight: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
