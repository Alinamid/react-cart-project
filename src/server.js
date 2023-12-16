const express = require("express");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const twilio = require("twilio");

const app = express();

// Twilio configuration (replace with your Twilio credentials)
const accountSid = "your_account_sid";
const authToken = "your_auth_token";
const twilioClient = twilio(accountSid, authToken);

// Rate limiting middleware
const smsLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 3, // Max 3 requests per hour
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve HTML file from 'public' directory

// SMS endpoint
app.post("/send-sms", smsLimiter, (req, res) => {
  const phoneNumber = req.body.phoneNumber;

  // Send SMS using Twilio
  twilioClient.messages
    .create({
      body: "Omniconvert is awesome! :)",
      from: "your_twilio_phone_number",
      to: phoneNumber,
    })
    .then((message) => {
      console.log(`SMS sent to ${phoneNumber}: ${message.sid}`);
      res.send("SMS sent successfully!");
    })
    .catch((error) => {
      console.error(`Error sending SMS to ${phoneNumber}: ${error.message}`);
      res.status(500).send("Failed to send SMS");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
