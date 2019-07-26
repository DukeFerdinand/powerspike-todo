const path = require("path");

const express = require("express");
const axios = require("axios");

const app = express();

const staticPath = path.join(__dirname, "/dist");

app.use(express.static(staticPath));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(staticPath, "index.html"));
});

// Listen on 0.0.0.0 to enable easy containerizing
app.listen(3000, "0.0.0.0", () => console.log("Listening on localhost:3000"));
