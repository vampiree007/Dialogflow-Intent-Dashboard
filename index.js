const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config()

// Handling uncaught Exception and gracefully shutting down server in Case
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Body Parsing Has been handled in below to lines, fetching incoming req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handling Incoming Requests
app.use('/api/dialogflow', require('./server/routes/dialogflow'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Dynamically Setting Port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});

// Handling unhandled Rejection and gracefully shutting down server in Case
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});