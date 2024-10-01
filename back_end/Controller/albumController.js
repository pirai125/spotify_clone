const cloudinary = require("cloudinary").v2;
const albumModel = require("../Models/albumModel");

exports.addAlbum = async (req, res) => {
  try {
    const { name, desc, bgColour } = req.body;
    const image = req.file;
    const imageUpload = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColour,
      image: imageUpload.secure_url,
    };

    const album = await albumModel(albumData);
    await album.save();

    res.json({ success: true, message: "Album Added" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, error });
  }
};

exports.listAlbum = async (req, res) => {
  try {
    const allAlbums = await albumModel.find({});
    res.json({ success: true, albums: allAlbums });
  } catch (error) {
    res.json({ message: false, error });
  }
};

exports.removeAlbum = async (req, res) => {
  try {
    await albumModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Album Removed" });
  } catch (error) {
    res.json({ message: false, error });
  }
};
