const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  carNumber: { type: String, required: true },
  region: { type: String, required: true },
});

module.exports = mongoose.model("Driver", driverSchema);
