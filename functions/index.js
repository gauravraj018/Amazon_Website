const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");

const stripe = require("stripe")(
  "sk_test_51IRv9sIdlSkJm4p4XP75eBYdvOuJOwJHBeoVpzimCfCgPtyR3ASzHlV7sq4qXlVmhkOnuwX87RXkdB3HYzEeXSDL00QT22MvPl"
);
// API

// app connfig
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// api routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // Ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen Command
exports.api = functions.https.onRequest(app);
