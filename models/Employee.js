/*
  models represent data structures and validation rules

  these schemas are for reference to help with coding the backend.
  ryan to create these with his DB work
*/

import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  role: String,
  contactDetails: {
    email: String,
    phone: String,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
