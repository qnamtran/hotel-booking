
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const roomBookingsRoute = require('./routes/roomBookings');
// const employeesRoute = require('./routes/employees');
// const cleaningDutiesRoute = require('./routes/cleaningDuties');
// const roomsRoute = require('./routes/rooms');
// const path = require('path');
// const { db } = require('./models/RoomBooking');
// const app = express();
// const dotenv = require('dotenv').config({ path: .env});

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected.");
});

/*
const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.ATLAS_URI);
const connection = mongoose.connection;
connection.once('open', ()=> {
  console.log("MongoDB database connection established succesfully");
})
*/


/*
mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
*/


app.use(express.json());
app.use(cors());

// Route to serve adminPortal.html as index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'AdminPortal', 'adminPortal.html'));
});


// Route to serve CRUD pages within AdminPortal folder
app.get('/admin/:page', (req, res) => {
  const page = req.params.page;
  const fileName = `${page}AP.html`;
  res.sendFile(path.join(__dirname, 'AdminPortal', fileName));
});

// API routes
app.use('/api/room-bookings', roomBookingsRoute);
app.use('/api/employees', employeesRoute);
app.use('/api/cleaning-duties', cleaningDutiesRoute);
app.use('/api/rooms', roomsRoute);

/* ports
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
*/
app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
