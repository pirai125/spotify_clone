const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connection.on("Connected", () => console.log("Database Connected"));
  await mongoose
    .connect(`${process.env.MONGODB_URI}/spotify`)
    .then(() => console.log("Database Connected"));
};

module.exports = connectDB;
