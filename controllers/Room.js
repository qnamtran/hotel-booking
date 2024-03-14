import Room from "../models/Room.js";

const roomController = {
    /* Create a new room */
    async createRoom(req, res) {
        // Can add data validation here using express-validator
        try {
            const newRoom = new Room(req.body);
            const savedRoom = await newRoom.save();
            res.json(savedRoom);
        } catch (error) {
            // Will add more specific error messages eventually
            res.status(500).json({ error: error.message });
        }
    },

    /* Get all rooms */
    async getAllRooms(req, res) {
        try {
            // Will add more specific error messages eventually
            const rooms = await Room.find();
            res.json(rooms);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    /* Get Room by ID */
    async getRoomByID(req, res) {
        try {
            // Will add more specific error messages eventually
            const rooms = await Room.findById(req.params.id);
            res.json(rooms);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    /* Update Room by ID */
    async updateRoomByID(req, res) {
        try {
            const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedRoom);
        } catch (error) {
            // Will add more specific error messages eventually
            res.status(500).json({ error: error.message });
        }
    },

    /* Delete Room by ID */
    async deleteRoomByID(req, res) {
        try {
            const deletedRoom = await Room.findByIdAndDelete(req.params.id);
            res.json(deletedRoom);
        } catch (error) {
            // Will add more specific error messages eventually
            res.status(500).json({ error: error.message });
        }
    }
};

export default roomController;