import path from "path";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cleaningDutiesRoute from './routes/cleaningDuties.js';
import employeesRoute from './routes/employees.js';
import roomsRoute from './routes/rooms.js';
import roomBookingsRoute from './routes/roomBookings.js';

const app = express();
dotenv.config();

app.use(bodyParser.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected.");
});
app.use(express.json());
app.use(cors());

// Route to serve adminPortal.html as index page
app.get('/', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'AdminPortal', 'adminPortal.html'));
});


// Route to serve pages within AdminPortal folder
app.get('/AdminPortal/:page', (req, res) => {
  const page = req.params.page;
  const fileName = `${page}.html`;
  res.sendFile(path.join(path.resolve(), 'AdminPortal', fileName));
});

// API routes (Quang, remember when you said "why is this called API when we dont have an API folder? yeah i accidentally named them all "api/whatever" instead of "routes/whatever", lol)
app.use('/routes/roomBookings', roomBookingsRoute);
app.use('/routes/employees', employeesRoute);
app.use('/routes/cleaningDuties', cleaningDutiesRoute);
app.use('/routes/rooms', roomsRoute);
app.use('/routes/users', usersRoute);

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
