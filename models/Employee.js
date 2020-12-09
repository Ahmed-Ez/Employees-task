const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
  },
  salary: {
    type: Number,
  },
  attendanceTime: {
    type: Number,
    default: 0,
  },
  leaveTime: {
    type: Number,
    default: 0,
  },
  netAvailable: {
    type: Number,
    default: 0,
  },
  efficiecy: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
