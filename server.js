const express       = require('express');
const bodyParser    = require('body-parser');
const session       = require('express-session');
const cookieParser  = require('cookie-parser');
const app           = express();
require('dotenv').config();
const passport      = require('passport')


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
      saveUninitialized: true,
      resave: true,
      secret: "ini rahasia",
       }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/api/user', (req, res) => {
      if (req.user) {
          res.json({user:req.user})
      } else {
            res.json({
                  user:null
            })
      }
})


app.use('/api/auth', require('./routes/login'));

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));