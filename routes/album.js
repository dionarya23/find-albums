const cloudinary = require('../config/cloudinary')
const express    = require('express')
const router     = express.Router()
const fs         = require('fs')
const vision     = require('@google-cloud/vision')
const fetch      = require('node-fetch')
const multer     = require('multer')
const Datauri    = require('datauri')
const path       = require('path')
const storage    = multer.memoryStorage()

const multerUploads = multer({storage:storage}).single('avatar')
const dUri = new Datauri()
const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
const client = new vision.ImageAnnotatorClient({
  keyFilename: process.env.VISION_KEY
});

var middleware = function(req, res, next) {
    if (req.header('x-api-key') != process.env.X_API_KEY) {
        res.status(401).json({
            message: 'invalid credential'
        })
    }
    return next()
}


router.post('/', middleware, multerUploads, (req, res) => {

  let file = dataUri(req).content

  // console.log(file)
  cloudinary.v2.uploader.upload(file, (err, imageCloud) => {
    console.log('imageCloud ', imageCloud)
    console.log('error ', err)

    if (err) {
      res.json({
        label: 'sedang rusak :)',
        spotify: 'maaf'
      })
    }

    client.webDetection(imageCloud.url)
    .then(response => {
       
    var result = response[0].webDetection.bestGuessLabels[0].label,
        queryForSearch = result.replace('album cover', '')

    fetch(`https://api.spotify.com/v1/search?q=${queryForSearch}&type=album,artist`, {
        method: 'GET',
        headers: {
        Authorization: 'Bearer '+req.user.accessToken
       }
    })
    .then(res => res.json())
    .then(album => {
        res.json({
            label: result,
            spotify: album.albums.items[0].uri
        })
    }).catch(err => {
        res.json(err)
    })

    }).catch(err => {
        console.log('error here ', err)
      res.json(err)

    });
  })
    

})

module.exports = router