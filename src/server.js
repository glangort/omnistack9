const mongoose = require("mongoose");
const express = require("express");

const routes = require("./routes");

const app = express();
// req.query

mongoose.connect(
  "mongodb+srv://gabriel:481756@cluster0-wlowm.gcp.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
