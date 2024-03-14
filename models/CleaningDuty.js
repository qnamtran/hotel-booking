/*
  models represent data structures and validation rules

  these schemas are for reference to help with coding the backend.
  ryan to create these with his DB work
*/
import mongoose from "mongoose";

const cleaningDutySchema = new mongoose.Schema({
  roomOrArea: {
    type: String,
    required: true,
  },
  assignedEmployee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee', // referencing Employee model
    required: false,
    // employee will be assigned later (post creation)
  },
  date: {
    type: Date,
    default: Date.now,
  },
  requestedBy: {
    type: String
  }
});
const CleaningDuty = mongoose.model('Cleaning', cleaningDutySchema);

export default CleaningDuty;
