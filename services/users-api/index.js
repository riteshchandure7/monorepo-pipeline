const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json({
    service: "users-api",
    users: [
      { id: 1, name: "Ritesh" },
      { id: 2, name: "DevOps Engineer" }
    ]
  });
});

app.listen(4000, () =>
  console.log("Users API running on port 4000")
);
