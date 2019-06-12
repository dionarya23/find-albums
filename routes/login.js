const express = require('express');
const router = express.Router();
const passport = require('../config/passport')

router.get('/', passport.authenticate('spotify'))
router.get('/spotify/callback', passport.authenticate('spotify'), (req, res) => {
    // res.json(req.user)
    console.log(req.user)
    res.redirect('/api/home')
})

module.exports = router;