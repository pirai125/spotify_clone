const express = require("express");
const albumRouter = express.Router();
const upload = require("../Middleware/multer");
const albumControls = require("../Controller/albumController");

albumRouter.post("/add", upload.single("image"), albumControls.addAlbum);
albumRouter.get("/list", albumControls.listAlbum);
albumRouter.post("/remove", albumControls.removeAlbum);

module.exports = albumRouter;
