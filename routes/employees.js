import express from 'express';
import employeeController from '../controllers/Employee.js';

const router = express.Router();

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeByID);
router.put('/:id', employeeController.updateEmployeeByID);
router.delete('/:id', employeeController.deleteEmployeeByID);

export default router;