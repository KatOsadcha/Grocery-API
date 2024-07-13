const Employee = require('../models/employee');

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new employee
exports.addEmployee = async (req, res) => {
  const { empId, username, password } = req.body;
  if (empId && username && password) {
    try {
      const newEmployee = new Employee({ empId, username, password });
      const employee = await newEmployee.save();
      res.status(201).json(employee);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
