const express  = require('express');
const router   = express.Router();
const passport = require('../config/passport')
const CLIENT_HOME_PAGE_URL = process.env.CLIENT_HOME_PAGE_URL

router.get('/', passport.authenticate('spotify', {
  scope: ['user-read-email', 'user-read-private']
}))

router.get('/spotify/callback', passport.authenticate('spotify', {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect : '/api/auth/fail'
}))

router.post('/token', (req, res) => {
  fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(process.env.CLIENT_ID+ ':' +process.env.CLIENT_SECRET ).toString('base64')}`
    },
    body: {
      grant_type    : 'refresh_token',
      refresh_token : req.body.refresh_token
    }
  }).then(res => res.json())
  .then(tokens => {
    
    req.user.accessToken = tokens.access_token
      res.json({
        accessToken: tokens.access_token
      })

  }).catch(err => {
    res.json({
      message: 'fail'
    })
  })
})

// when login is successful, retrieve user info
router.get("/success", (req, res) => {

    if (req.user) {
      res.status(200).json({
        success: true,
        message: "user has successfully authenticated",
        user   : req.user,
        cookies: req.cookies
      });
    }
  });

// When logout, redirect to client
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_HOME_PAGE_URL);
  });

// when login failed, send failed msg
router.get('/fail', (req, res) => {
    res.status(401).json({
        success: false,
        message: "user failed to authenticate."
      });
})




module.exports = router;