const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      require: true,
    },
    lastEdit: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ToDo", todoSchema);
