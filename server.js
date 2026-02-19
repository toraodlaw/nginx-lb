const express = require("express");
const app = express();

const PORT = process.env.PORT || 6000;
const HOSTNAME = process.env.HOSTNAME;

app.get("/", (req, res) => {
  res.send(`Hello from ${HOSTNAME}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
