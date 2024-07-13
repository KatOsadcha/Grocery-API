const mongoose = require("../db");

const employeeSchema = new mongoose.Schema({
  empId: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Employee = mongoose.model("employees", employeeSchema);

module.exports = Employee;
