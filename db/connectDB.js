const mongoose = require("mongoose");

const connectDB = (uri) => {
  return mongoose.connect(uri).then(() => console.log("CONNECTED TO THE DB"));
};

module.exports = connectDB;
