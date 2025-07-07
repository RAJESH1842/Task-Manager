const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const Tasks = require("./routes/Tasks");

dotenv.config();

const app = express();
const port = 3000;

app.use (express.static('./public'))
app.use(express.json())



app.use("/api/v1/Tasks", Tasks);

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