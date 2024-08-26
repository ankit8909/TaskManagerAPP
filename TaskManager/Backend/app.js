const express = require("express");
require("./db");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8089;
const TaskRouter = require("./TaskRouter");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
app.use("/task", TaskRouter);


app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT=${PORT}`);
});
