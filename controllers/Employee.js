import Employee from "../models/Employee.js";

const employeeController = {
    /* Create a new employee */
    async createEmployee (req, res) {
        try {
          const newEmployee = new Employee(req.body);
          const savedEmployee = await newEmployee.save();
          res.json(savedEmployee);
        } catch (error) {
          // Will add more specific error messages eventually
          res.status(500).json({ error: error.message });
        }
      },

      /* Get all employees */
      async getAllEmployees (req, res) {
        try {
          const employees = await Employee.find();
          res.json(employees);
        } catch (error) {
          // Will add more specific error messages eventually
          res.status(500).json({ error: error.message });
        }
      },

      /* Get employee by ID */
      async getEmployeeByID (req, res) {
        try {
          const employee = await Employee.findById(req.params.id);
          res.json(employee);
        } catch (error) {
          // Will add more specific error messages eventually
          res.status(500).json({ error: error.message });
        }
      },

      /* Update employee by ID */
      async updateEmployeeByID (req, res) {
        try {
          const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
          res.json(updatedEmployee);
        } catch (error) {
          // Will add more specific error messages eventually
          res.status(500).json({ error: error.message });
        }
      },

      /* Delete employee by ID */
      async deleteEmployeeByID (req, res) {
        try {
          const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
          res.json(deletedEmployee);
        } catch (error) {
          // Will add more specific error messages eventually
          res.status(500).json({ error: error.message });
        }
      }
};

export default employeeController;