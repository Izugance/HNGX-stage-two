const express = require("express");
require("dotenv").config();

const personRouter = require("./routes/personRouter");
const connectDB = require("./db/connectDB");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const app = express();

// -----Middleware-----
app.use(express.json());

// -----Routes-----
app.use("/api", personRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// ----Server setup-----
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
    // app.listen(port);
  } catch (err) {
    console.log(err);
    // return;
  }
};

start();
