import RoomBooking from '../models/RoomBooking.js';

const roomBookingController = {
    /* Get all room bookings */
    async getBookings(req, res) {
        try {
          // Will add more specific error messages eventually
          const bookings = await RoomBooking.find();
           return res.status(200).json(bookings);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },

      /* Create new room booking */
    async createBooking(req, res) {
        // Can add data validation here using express-validator
        try {
            const newBooking = new RoomBooking(req.body);
            const savedBooking = await newBooking.save();
            res.json(savedBooking);
        } catch (error) {
            // Will add more specific error messages eventually
            res.status(500).json({ error: error.message });
        }
    },

    /* Update room booking */
    async updateRoom(req, res) {
        try {
            const updatedBooking = await RoomBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedBooking);
        } catch (error) {
            // Will add more specific error messages eventually
            res.status(500).json({ error: error.message });
        }
    },

    /* Delete a room booking by ID */
    async deleteRoom(req, res) {
        try {
            const deletedBooking = await RoomBooking.findByIdAndDelete(req.params.id);
            res.json(deletedBooking);
        } catch (error) {
            // Will add more specific error messages eventually
            res.status(500).json({ error: error.message });
        }
    },

    /* Check availability of a room by ID */
    async checkBookingAvailability(req, res) {
        const { startDate, endDate } = req.query;

        try {
            const availableRooms = await Room.find({
                _id: { $nin: await getBookedRoomIds(startDate, endDate) }
            });

            res.json({ availableRooms });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export default roomBookingController;