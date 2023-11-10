const express = require("express");
const connectDB = require("./config/database");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`);
});

connectDB();
