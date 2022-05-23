const mongoose = require("mongoose");

const taskScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const taskModel = mongoose.model("Task", taskScheme);

module.exports = taskModel;
