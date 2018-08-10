require('dotenv').config();
const next = require('next');
var express = require('express');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
const models = require('./models/');
const { parse } = require('url');
const routes = require('./routes.js');
var cors = require('cors')

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
    //console.log("Facebook response:", profile);
    
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
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
// Create a new Express application.
  var server = express();

  var corsOptions = {
    origin: process.env.WEBAPP_DOMAIN,
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  server.use(cors(corsOptions));
  // Use application-level middleware for common functionality, including
  // logging, parsing, and session handling.
  server.use(require('morgan')('combined'));
  server.use(require('cookie-parser')());
  server.use(require('body-parser').urlencoded({ extended: true }));
  server.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

  // Initialize Passport and restore authentication state, if any, from the
  // session.
  server.use(passport.initialize());
  server.use(passport.session());


  // Define routes.
  // server.get('/',
  //   function(req, res) {
  //     res.render('home', { user: req.user });
  //   });

  // server.get('/login',
  //   function(req, res){
  //     res.render('login');
  //   });
  server.get('/api/user/logged-in', function(req, res){
    var result = {
      success: true,
      message: "User is logged in",
      data: {}
    }
    if(req.user){
      return res.json(result);
    }
    result.success = false;
    result.message = "User not logged in";
    return res.json(result);
  });
  server.get('/login/facebook',
    passport.authenticate('facebook', {scope : ['email'] }));

  server.get('/login/facebook/return', 
    passport.authenticate('facebook', { failureRedirect: process.env.WEBAPP_DOMAIN}),
    function(req, res) {
      console.log("start req");
      console.log(req);
      console.log("end req");
      res.redirect(process.env.WEBAPP_DOMAIN);
    });

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query = {} } = parsedUrl;
    const route = routes[pathname];
    if (route) {
      return app.render(req, res, route.page, query);
    }
    return handle(req, res);
  });

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });

  

});
