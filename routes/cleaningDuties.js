import express from 'express';
import cleaningDutiesController from '../controllers/CleaningDuty.js';

const router = express.Router();

router.post('/request', cleaningDutiesController.requestRoomClean);
router.post('/assign', cleaningDutiesController.assignEmployeeToRoomClean);
router.get('/', cleaningDutiesController.getRoomCleans);
router.delete('/:id', cleaningDutiesController.deleteRoomCleanByID);

export default router;