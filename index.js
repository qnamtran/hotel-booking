// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const roomBookingsRoute = require('./routes/roomBookings');
// const employeesRoute = require('./routes/employees');
// const cleaningDutiesRoute = require('./routes/cleaningDuties');
// const roomsRoute = require('./routes/rooms');
// const path = require('path');


// const app = express();

/*
This line may not be needed, as the body-parser middleware is
apparently bundled with Express starting from version 4.16.0.
Will keep it here for now just in case we need it :)

app.use(bodyParser.json());
*/


/* 
This is how we connect to the database. this is commented out 
for now, until we have one set up

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
*/

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected.");
});
app.use(express.json());
app.use(cors());

// // Route to serve adminPortal.html as index page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'AdminPortal', 'adminPortal.html'));
// });


// // Route to serve CRUD pages within AdminPortal folder
// app.get('/admin/:page', (req, res) => {
//   const page = req.params.page;
//   const fileName = `${page}AP.html`;
//   res.sendFile(path.join(__dirname, 'AdminPortal', fileName));
// });

// API routes
app.use('/api/room-bookings', roomBookingsRoute);
app.use('/api/employees', employeesRoute);
app.use('/api/cleaning-duties', cleaningDutiesRoute);
app.use('/api/rooms', roomsRoute);


// /* ports
// const PORT = 8080;

// app.listen(PORT, () => {
//   console.log(`Server is running on PORT ${PORT}`);
// });
// */

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
