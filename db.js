// db.js
require('dotenv').config();
const dbConn = process.env.DB_CONN;
const mongoose = require("mongoose");
mongoose.connect(dbConn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
