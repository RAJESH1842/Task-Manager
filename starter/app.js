const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const Tasks = require("./routes/Tasks");
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
dotenv.config();

const app = express();
const port = 3000;

app.use (express.static('./public'))
app.use(express.json())
app.use


app.use("/api/v1/Tasks", Tasks)
app.use(notFound)

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log("Server failed to start:", error.message);
  }
};

start();