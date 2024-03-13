
import express from 'express';
import roomBookingController from '../controllers/RoomBookings.js';

const router = express.Router();

router.post('/', roomBookingController.createBooking);
router.get('/', roomBookingController.getBookings);
router.put('/:id', roomBookingController.updateRoom);
router.delete('/:id', roomBookingController.deleteRoom);
router.get('/availability', roomBookingController.checkBookingAvailability);


export default router;
