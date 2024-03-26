const express = require("express");
const app = express();
const routerCreator = require("./routes/mainRoute");
module.exports = app;
app.use(express.json());
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hi");
});
// need to setup rout shit
app.use("/api/wetherApp", routerCreator);
