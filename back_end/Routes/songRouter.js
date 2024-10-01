const express = require("express");
const songRouter = express.Router();
const upload = require("../Middleware/multer");
const songControls = require("../Controller/songController");

songRouter.post(
  "/add",
  upload.fields([
    { name: "audio" },
    { name: "image" }
  ]),
  songControls.addSong
);

songRouter.get("/list", songControls.listSong);
songRouter.post("/remove", songControls.removeSong);
module.exports = songRouter;
