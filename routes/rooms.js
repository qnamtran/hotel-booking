import express from 'express';
import roomController from '../controllers/Room.js';

const router = express.Router();

router.post('/', roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getRoomByID);
router.put('/:id', roomController.updateRoomByID);
router.delete('/:id', roomController.deleteRoomByID);

export default router;