/*
  models represent data structures and validation rules

  these schemas are for reference to help with coding the backend.
  ryan to create these with his DB work
*/
const mongoose = require('mongoose');

const cleaningDutySchema = new mongoose.Schema({
  roomOrArea: {
    type: String,
    required: true,
  },
  assignedEmployee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee', // referencing Employee model
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('CleaningDuty', cleaningDutySchema);
