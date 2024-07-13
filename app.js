// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// CORS preflight middleware
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.send();
});

const groceryCartRoutes = require("./routes/groceryCartRoutes");
const groceryEmployeeRoutes = require("./routes/groceryEmployeeRoutes");
const groceryOrderRoutes = require("./routes/groceryOrderRoutes");
const groceryProductRoutes = require("./routes/groceryProductRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/groceryCarts", groceryCartRoutes);
app.use("/groceryEmployees", groceryEmployeeRoutes);
app.use("/groceryOrders", groceryOrderRoutes);
app.use("/groceryProducts", groceryProductRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
