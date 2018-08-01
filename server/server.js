require('dotenv').config();
var express = require('express');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
const models = require('./models/');

// Configure the Facebook strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new Strategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.REACT_APP_API_DOMAIN + '/login/facebook/return',
    profileFields: ['id', 'emails', 'name']
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return models.sequelize.transaction({autocommit: false}, function(user_transaction){
      if(profile.emails.length > 0){
        return models.user.findOrCreate({
          where: {
            email: profile.emails[0].value
          },
          transaction: user_transaction
        })
        .spread(function(user, created){
          models.auth.findOrCreate({
            where: {
              user_id: user.id,
              provider_name: profile.provider,
              provider_user_id: profile.id
            }
          })
          .spread(function(auth, created){
            return cb(null, user);
          })
        })
      }

    })
    console.log("Facebook response:", profile);
    
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// Create a new Express application.
var app = express();

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// Define routes.
// app.get('/',
//   function(req, res) {
//     res.render('home', { user: req.user });
//   });

// app.get('/login',
//   function(req, res){
//     res.render('login');
//   });

app.get('/login/facebook',
  passport.authenticate('facebook', {scope : ['email'] }));

app.get('/login/facebook/return', 
  passport.authenticate('facebook', { failureRedirect: process.env.WEBAPP_DOMAIN}),
  function(req, res) {
    res.redirect(process.env.WEBAPP_DOMAIN);
  });

app.listen(3001, function(){
  console.log("Listening on port 3000");
});
