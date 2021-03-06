const express       = require('express');
const bodyParser    = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser  = require('cookie-parser');
const app           = express();
require('dotenv').config();
const passport      = require('passport')
const cors          = require('cors');
const session       = require('express-session')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'secret apps',
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(
      cors({
        origin: process.env.CLIENT_HOME_PAGE_URL, // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
  })
);

app.get('/',(req, res) => res.send('<h1>Hello</h1>'))
app.use('/api/auth', require('./routes/auth'));
app.use('/api/album', require('./routes/album'))

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));