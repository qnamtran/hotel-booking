/*
Routes define the endpoint or URLs that clients use to
interact with the server
*/

const express = require('express');
const router = express.Router();
const CleaningDuty = require('../models/CleaningDuty');


/*
Request cleaning for a room (User)
This route allows a user to request cleaning for their room.
*/
router.post('/request', async (req, res) => {
  // Can add data validation here using express-validator
  try {
    // Extracting data from the request body
    const { roomNumber, userId } = req.body;

    // Creating a new cleaning duty instance with the requested room number
    const newCleaningRequest = new CleaningDuty({ roomOrArea: roomNumber, requestedBy: userId });

    // Saving the new cleaning request to the database
    const savedCleaningRequest = await newCleaningRequest.save();

    // Responding with the details of the newly created cleaning request
    res.json(savedCleaningRequest);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});



/*
Assign cleaning duties to employees (Admin Only)
This route allows an admin to assign cleaning duties to specific employees for certain rooms or areas.
*/
router.post('/assign', async (req, res) => {
  // Add authentication/authorization check for admin here
  
  try {
    // Extracting data from the request body
    const { cleaningRequestId, assignedEmployeeId } = req.body;

    // Updating the cleaning duty with the assigned employee
    const updatedCleaningDuty = await CleaningDuty.findByIdAndUpdate(
      cleaningRequestId,
      { assignedEmployee: assignedEmployeeId },
      { new: true }
    );

    // Responding with the details of the updated cleaning duty
    res.json(updatedCleaningDuty);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});



/*
Get all cleaning duties
This route is used to retrieve a list of all cleaning duties.
It can be used by admins to manage cleaning duties or by users to display assigned duties.
*/
router.get('/', async (req, res) => {
  try {
    // Retrieving all cleaning duties from the database and populating the 'assignedEmployee' field
    const cleaningDuties = await CleaningDuty.find().populate('assignedEmployee');

    // Responding with the list of cleaning duties
    res.json(cleaningDuties);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});



/*
Delete a cleaning duty by ID
This route is used to delete an existing cleaning duty based on its ID.
It might be used on the frontend if a user decides to cancel a cleaning duty assignment.
*/
router.delete('/:id', async (req, res) => {
  try {
    const deletedCleaningDuty = await CleaningDuty.findByIdAndDelete(req.params.id);
    res.json(deletedCleaningDuty);
  } catch (error) {
    // Will add more specific error messages eventually
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;

