const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

passport.use(new SpotifyStrategy(
    {
      clientID    : process.env.CLIENT_ID,
      clientSecret:  process.env.CLIENT_SECRET,
      callbackURL : 'http://findalbum-backend.herokuapp.com/api/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
        var user = {
            accessToken  : accessToken,
            refreshToken : refreshToken,
            expires_in   : expires_in,
            profile      : profile._json
        }

        return done(null, user);
    }
  ))

  module.exports = passport