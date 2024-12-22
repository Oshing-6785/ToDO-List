require("dotenv").config();
const express = require("express");
const app = express();
const toDoRouts = require("./routes/toDoRoutes");
const userRoutes = require("./routes/userRoutes");
const db = require("./config/db");
const port = process.env.PORT || 6001;

app.use(express.json());
app.use("/api/todo", toDoRouts);
app.use("/api/user", userRoutes);

const start = async () => {
  await db.connect();
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

start();

// app.listen(port, () => {
//   console.log("server running");
// });
