const express = require("express");
const cors = require("cors");
const config = require("./config/config.js");
const { send_email, getIcalObjectInstance } = require('../utilities/email.js');

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

// email calender test route
app.get("/send-email-with-invite", (req, res) => 
  {
    const target_date = "22-07-2024";
    const emailSubject = "Test Calender Invite";
    const emailHTML = `<p> Hello, <br/> You have recieved a calender invite. </p>`;
    const recipientEmail = "vijaynv10@gmail.com";

    const calenderObj = getIcalObjectInstance(target_date, target_date, `Test Invite`, `This is a rest calender invite`, "Location", "Sender Name" ,"Sender Email")

    send_email(recipientEmail, emailSubject, emailHTML,calenderObj);
    res.json({ message: "Email sent successfully" });
  });

// set port, listen for requests
const PORT = 8080; //process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
