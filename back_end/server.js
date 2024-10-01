const express = require("express");
const cors = require("cors");

const connectDB = require("./Config/mongodb");
const connectCloudinary = require("./Config/cloudinary");
require("dotenv").config();
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

app.use("/api/song", require("./Routes/songRouter"));
app.use("/api/album", require("./Routes/albumRouter"));
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
