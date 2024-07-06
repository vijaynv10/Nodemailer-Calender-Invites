const express = require("express");
const cors = require("cors");
const config = require("./config/config.js");

const app = express();

var corsOptions = {
  origin: ["http://localhost:8081", "http://localhost:3000"],
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SILA." });
});

// email test route
app.get("/send-email", (req, res) => 
{
  
  res.json({ message: "Welcome to SILA." });
});

// set port, listen for requests
const PORT = 8080; //process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
