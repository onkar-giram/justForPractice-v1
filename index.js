const express = require("express");
const connectDB = require("./config/database");
const app = express();
const { login, signup } = require("./routes/AuthRoute");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const authRoute = require("./routes/AuthRoute");

app.use(express.json());

app.use("/api/v1/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`);
});

connectDB();
