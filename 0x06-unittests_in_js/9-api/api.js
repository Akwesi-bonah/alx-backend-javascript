const express = require("express");

const app = express();
const PORT = 7865;

app.get("/", (_, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.get("/login", (req, res) => {
  let name = "";

  if (req.body) {
    name = req.body.username;
  }

  res.send(`Welcome ${name}`);
});

app.get("avaliable_payment", (req, res) => {
  res.json({
    payment_methods: {
      credits_cards: true,
      paypal: false,
    },
  });
});
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
