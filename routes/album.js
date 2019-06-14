const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg') //Appending .jpg
    }
  })
  
  var upload = multer({ storage: storage });
const express = require('express')
const router  = express.Router()
const fs = require('fs')
const vision = require('@google-cloud/vision')
const fetch = require('node-fetch')

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


router.post('/', middleware, upload.single('avatar'), (req, res) => {

  // console.log(req.file)

  // res.json({
  //   message:'debug'
  // })
    client.webDetection(req.file.path)
    .then(response => {
       
    var result = response[0].webDetection.bestGuessLabels[0].label,
        queryForSearch = result.replace('album cover', '')

    fetch(`https://api.spotify.com/v1/search?q=${queryForSearch}&type=album,artist`, {
        method: 'GET',
        headers: {
        Authorization: 'Bearer '+req.user.accessToken
       }
    }).then(res => res.json())
    .then(album => {
        res.json({
            label: result,
            spotify: album.albums.items[0].uri
        })
    }).catch(err => {
        res.json(err)
    })

      fs.unlinkSync(req.file.path)
    }).catch(err => {

      res.json(err)

    });

})

module.exports = router