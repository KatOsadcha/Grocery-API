const jwt = require('jsonwebtoken');
const Employee = require('../models/employee');
const secretKey = 'YourSecretKey'; // Hardcoded secret key (not recommended for production)

// Registration endpoint
exports.register = async (req, res) => {
  const { empId, username, password } = req.body;
  if (empId && username && password) {
    try {
      const newEmployee = new Employee({ empId, username, password });
      await newEmployee.save();
      res.status(201).json({ message: 'Employee registered successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(400).json({ message: 'Registration failed' });
  }
};

// Login endpoint
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const employee = await Employee.findOne({ username, password });
    if (employee) {
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

