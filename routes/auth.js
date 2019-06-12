const express = require('express');
const router = express.Router();
const passport = require('../config/passport')
const HOMPAGE_CLIENT = "http://localhost:3000"


router.get('/', passport.authenticate('spotify'))

router.get('/spotify/callback', passport.authenticate('spotify', {
    successRedirect: HOMPAGE_CLIENT,
    failureRedirect : '/api/auth/fail'
}), (req, res) => {

})

// when login is successful, retrieve user info
router.get("/success", (req, res) => {
  console.log(req.user)

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