/*
routes define the endpoint or URLS that clients use to
interact with the server
*/

const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// ADMIN: Create a new employee
router.post('/', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Get employee by ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Update employee by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployee);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Delete employee by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    res.json(deletedEmployee);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
