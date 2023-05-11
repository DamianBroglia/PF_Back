const dotenv = require("dotenv")
const cloudinaryModule = require("cloudinary")

dotenv.config()
const cloudinary = cloudinaryModule.v2

cloudinary.config({
    cloud_name: "patagonia",
    api_key: "549577593177651",
    api_secret: "fQFNlCy-lfrnQaMZg2_uUrw3xjw"
  });

module.exports = cloudinary;