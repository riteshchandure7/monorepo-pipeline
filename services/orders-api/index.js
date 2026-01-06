const express = require("express");
const app = express();

app.get("/orders", (req, res) => {
  res.json({
    service: "orders-api",
    orders: [
      { id: 101, item: "Laptop" },
      { id: 102, item: "Mouse" }
    ]
  });
});

app.listen(4000, () =>
  console.log("Orders API running on port 4000")
);
