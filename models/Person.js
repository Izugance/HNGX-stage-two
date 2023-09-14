const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
