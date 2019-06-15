const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CD_NAME,
    api_key: process.env.CD_KEY,
    api_secret: process.env.CD_SECRET
})

module.exports = cloudinary