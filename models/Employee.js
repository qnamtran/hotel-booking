/*
models represent data structures and validation rules
*/

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  role: String,
  contactDetails: {
    email: String,
    phone: String,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
