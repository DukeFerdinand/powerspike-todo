const path = require("path");

const express = require("express");
const axios = require("axios");

require("dotenv").config();

const app = express();

const staticPath = path.join(__dirname, "/dist");

app.use(express.static(staticPath));
app.use(express.json());

const API = axios.create({
  baseURL: "http://todo.powerspike.gg",
  headers: {
    Authentication: process.env.API_KEY
  }
});

// Using a backend /api proxy route to circumvent the CORS crap we'd have to deal with otherwise
app.get("/api", async (req, res) => {
  try {
    const result = await API.get("/");
    res.send({ tasks: result.data });
  } catch (err) {
    res.statusCode = 403;
    res.send({
      msg:
        "Unable to connect to API, please check your API token and try again",
      err
    });
  }
});

app.post("/api/new", async (req, res) => {
  try {
    const result = await API.post("/new", { ...req.body });
    res.send("success");
  } catch (err) {
    res.statusCode = 403;
    res.send({
      msg:
        "Unable to connect to API, please check your API token and try again",
      err
    });
  }
});

app.delete("/api/delete/:taskId", async (req, res) => {
  try {
    await API.delete(`/delete/${req.params.taskId}`);
    res.send("success");
  } catch (err) {
    res.statusCode = 403;
    res.send({
      msg:
        "Unable to connect to API, please check your API token and try again",
      err
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(staticPath, "index.html"));
});

// Listen on 0.0.0.0 to enable easy containerizing
app.listen(3000, "0.0.0.0", () => console.log("Listening on localhost:3000"));
